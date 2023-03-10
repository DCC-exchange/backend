const express = require('express')
const {createDeposit, getDeposits} = require('../controllers/DepositController')

const router = express.Router()


router.post("/create-deposit", createDeposit)
router.get("/all-deposits", getDeposits)

module.exports = router