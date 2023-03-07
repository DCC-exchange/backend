const express = require('express')
const router = express.Router()

const { SpotLimit } = require("../controller/Spot")

// const requireAuth = require('../middleware/requireAuth')

// require auth for all route
// router.use(requireAuth)

router.post('/spot-limit', SpotLimit)

module.exports = router
