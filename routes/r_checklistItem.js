const express = require('express')
const { getChecklistItem } = require('../controllers/c_checklistItem')
const { verifyToken } = require('../middlewares/login')

const router = express.Router()

router.get('/checklistItem/:id/item', verifyToken, getChecklistItem)

module.exports =  router 