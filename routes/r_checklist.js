const express = require('express')
const { getChecklists } = require('../controllers/c_checklist')
const { verifyToken } = require("../middlewares/login")

const router = express.Router()

router.get('/checklist',verifyToken, getChecklists)

module.exports = router
