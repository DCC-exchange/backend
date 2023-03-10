const Transaction = require('../model/TransactionModel')
const UserId = require('../model/profileModel')
const requireAuth = require('../middleware/requireAuth')


// Create a new transaction
const CreateTransaction = (async (req, res) => {
  const { amount, coin } = req.body

  const user_id = req.user._id

  if(!amount || !coin){
    res.status(400).json({error: "Field should not be empty"})
  }else{
    const user = await UserId.findById(user_id)
      if(!user){
        return res.status(404).json({error: "User not found"})
    }
    else{
      try {
        const savedTransaction = await Transaction.create({ user_id, amount, coin })
        return  res.status(201).json({message: 'Transaction created successfully', data: savedTransaction}) 
        } catch (error) {
        console.error(error)
        res.status(500).send(error.message)
      }
    }

  }

  })
  
  // Get all transactions
 const Fetch_transation = (async (req, res) => {
  const user_id = req.user._id
    try {
      const transactions = await Transaction.find(user_id)
      res.status(200).json(transactions)
    } catch (error) {
      console.error(error)
      res.status(500).send(error.message)
    }
  })
  
module.exports = {CreateTransaction, Fetch_transation}

  
