const express = require('express')
const { transferMoneyOrCoin } = require('../controller/transferController')
const requireAuth = require("../middleware/requireAuth")


const router = express.Router()

router.use(requireAuth)


router.post('/transfer-money', transferMoneyOrCoin )

module.exports = router 