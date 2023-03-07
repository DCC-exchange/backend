const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const transactionSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: true 
    }, 
    amount: {
        type: String,
        required: true,
    },
    wallet_id:{
        type: String,
        required: true,
        default: () => uuidv4()
    },
    coin: {
        type: String,
        required: true
    }
},{timestamps: true})

transactionSchema.pre('save', function (next) {
    if (!this.wallet_id) {
      this.wallet_id = uuidv4()
    }
    next()
  })

module.exports = mongoose.model('Transaction', transactionSchema)