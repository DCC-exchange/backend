const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const depositSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
     type: Number,
     required: true 
    },
  currency: { 
    type: String, 
    enum: ['BTC', 'ETH', 'USD', 'EUR'], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'completed', 'failed'], 
    default: 'completed' 
  },
  wallet_id: { 
    type: String,
    required: true, 
    unique: true,
     default: uuidv4 
    },
  createdAt: { 
    type: Date, 
    default: Date.now
   },
  updatedAt: { 
    type: Date,
     default: Date.now
     }
});

module.exports = mongoose.model('Deposit', depositSchema);
