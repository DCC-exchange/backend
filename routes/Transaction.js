const express = require('express')
const router = express.Router()

const requireAuth = require("../middleware/requireAuth")

// Users controller
const { CreateTransaction , Fetch_transation} = require('../controller/TransactionController')

// require auth for all route
router.use(requireAuth)

// Create a new transaction
router.post("/create-transation", CreateTransaction);

router.get("/all-transaction", Fetch_transation);

module.exports = router