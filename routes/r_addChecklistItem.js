const express = require('express')
const createChecklistItem = require('../controllers/c_addChecklistItem')
const { verifyToken } = require('../middlewares/login')

const router = express.Router()

router.post('/addChecklistItem/:id/items', verifyToken, createChecklistItem)

module.exports = router