const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const transferSchema = new mongoose.Schema({
    sender_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    receiver_id: {
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
    transaction_id: {
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
  
  module.exports = mongoose.model('Transfer', transferSchema);
  