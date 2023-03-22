const express = require('express')
const withdrawController = require('../controllers/Withdraw')


const router = express.Router()

router.post('/:userId/withdraw', withdrawController)

module.exports = router
