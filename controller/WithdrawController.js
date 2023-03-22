const binance = require('node-binance-api')
const Withdrawal = require('../model/withdrawal')
const Profile = require('../model/profileModel')


const withdraw = async (req, res) => {
    const { coin, address, amount } = req.body;
    const {user_id } = req.params;
  
    try {
      // Get the user's API keys from the database
      const user = await Profile.findById(user_id);
      const { apiKey, apiSecret } = user;
  
        // const client = Binance({
        //   apiKey: 'YOUR_API_KEY',
        //   apiSecret: 'YOUR_API_SECRET'
        // });

      // Initialize the Binance API with the user's API keys
      
      binance.options({
        APIKEY: apiKey,
        APISECRET: apiSecret,
      });
  
      if(!user){
        return res.status(400).json({message: 'User not found..'})
      }
      
      // Send the withdraw request to Binance
      const result = await binance.withdraw(coin, address, amount);
  
      // Create a new withdrawal record in the database
      const withdrawal = new Withdrawal({
        coin,
        address,
        amount,
      });
      await withdrawal.save();
  
      // Return the withdrawal record as the response
      res.status(200).json({
        success: true,
        withdrawal,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Withdrawal failed.',
      });
    }
  }
  
  module.exports = {withdraw}