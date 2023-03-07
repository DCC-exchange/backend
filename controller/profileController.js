const mongoose = require('mongoose')
const UsersProfile =  require('../model/profileModel')
const Users =  require('../model/UserModel')


// Get all user's profile
const AllUsers = async(req,res) =>{
   if(!req.user){
      res.status(401).json({error: "Session has expired please login"})
   }else{
      const user_id = req.user._id
      const users =   await UsersProfile.find({user_id })
      res.status(200).json(users)
   }
}


const  CreateAccount =(async(req,res)=>{
   const user_id = req.user._id

   const successCallback = (position) => {
      console.log(position);
    };
    
    const errorCallback = (error) => {
      console.log(error);
    };
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
})


// Get an individual profile
const UserPro = async(req, res)=>{
     const { id } = req.params

     if( !mongoose.Types.ObjectId.isValid(id) ){
            res.status(404).json({error: "NO such profile"})
     }else{
        const SingleProfile = await UsersProfile.findById(id)

        if(SingleProfile){
           res.status(200).json(SingleProfile)
        }else{
           res.status(401).json({error: "No such Id "})
        }
     }
}

module.exports = {CreateAccount, AllUsers, UserPro}