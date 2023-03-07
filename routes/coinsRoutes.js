const express = require('express')
const router = express.Router()

// Users controller
const { Allcoins, Hotcoins, Gainercoins } = require('../controller/CoinController')

// Fetch all coins 
router.get("/", Allcoins);

router.get("/hot", Hotcoins);

router.get("/gainers", Gainercoins);


module.exports = router