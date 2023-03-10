const Deposit = require('../models/Deposit')
const User = require('../models/User')

//..Create Deposit 
const createDeposit = async (req, res) => {
  try {
    const {user_id, amount, currency } = req.body;

    const user = await User.findById(user_id)
    if(!user){
        return res.status(404).json({error: "User not found"})
    }

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid amount.' });
    }
    if (!currency || !['USD', 'EUR', 'BTC', 'ETH'].includes(currency)) {
      return res.status(400).json({ success: false, message: 'Invalid currency.' });
    }

    const deposit = new Deposit({user_id, amount, currency });
    await deposit.save();
    res.json({ success: true, deposit });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to create deposit.' });
  }
};


  //..Get all Deposits 
 const getDeposits = async (req, res) => {
    try {
      const deposits = await Deposit.find({ 
        user: req.user._id 
    }).sort({ createdAt: 'desc' });

      res.json({ success: true, deposits });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to get deposits.' });
    }
  };

  module.exports = {createDeposit, getDeposits}