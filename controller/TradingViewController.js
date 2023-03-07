const mongoose = require('mongoose')
const UsersProfile =  require('../model/profileModel');
const Trade = require('../model/Tradeview');
const Users =  require('../model/UserModel')


// Get all user's profile

// const TradingView = async(req,res) =>{
//     res.json({send: "Hello world"})
// }


const getAllTrades = async (req, res) => {
    try {
      const trades = await Trade.find({ user: req.user._id });
      res.json(trades)
    } catch (error) {
      res.status(500).json({ error: 'Server error' })
    }
  }

  //...create Trade 
  const createTrade = async (req, res) => {
    const { symbol, type, amount, price, fee } = req.body
    const user = req.user._id
  
    try {
      const trade = await TradeView.create({ user, symbol, type, amount, price, fee })
      res.status(201).json(trade)
    } catch (error) {
      res.status(500).json({ error: 'Server error' })
    }
  }


module.exports = {getAllTrades, createTrade}