const mongoose = require("mongoose");
const schema = mongoose.Schema

const Spotschema = new schema({
    user_Id: {
        type: String,
        required: true,
        unique : true
    },
    type : {
        type: String,
        required: true
    },
    limit_price: {
        type: String,
        required: true
    },
    trade_amount: {
        type: String,
        required: true
    },
    currency_pair: {
        type: String,
        required: true
    },
    total_outcome: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    trade_side: {
        type: String,
        required: true
    },
}, { timestamp : true})

module.exports = mongoose.model('Spot', Spotschema)