const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TradeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['buy', 'sell'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  fee: {
    type: Number,
    required: true
  },
}, {timestamps: true});

module.exports = mongoose.model('TradeView', TradeSchema)
