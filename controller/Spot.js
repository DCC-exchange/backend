const mongoose = require('mongoose')
const UsersProfile =  require('../model/profileModel')
const SpotDB =  require('../model/spotModel')

const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: '<key>',
  APISECRET: '<secret>'
});

// spot limit
const SpotLimit = async(req,res) =>{
    
  try{
    const user_Id = req.user

     // Get user profile from database
     const userProfile = await UsersProfile.findOne({ user_Id })

     if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' })
    }

    // Get user's spot trades from database
    const spotTrades = await SpotDB.find({ user_Id })

    // Calculate total value of spot trades
    let totalValue = 0;
    for (let trade of spotTrades) {
      totalValue += Number(trade.total_outcome);
    }
  
     // Calculate remaining limit for user
     const remainingLimit = userProfile.spot_limit - totalValue

      // Get current spot prices
    const spotPrices = await binance.prices()

    console.info( await binance.futuresPrices())
    res.json({send: user_Id})
    
    // Send response with remaining limit and spot prices
    res.json({ remainingLimit, spotPrices })

  }catch(error){
    console.log(error)
    res.status(500).json({message: 'Server Error'})
  }
}

module.exports = {SpotLimit}