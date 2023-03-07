const express = require('express')
const router = express.Router()

const { getAllTrades, createTrade } = require("../controller/TradingViewController")


router.get('/', getAllTrades)
router.post('/create-trade', createTrade)


module.exports = router