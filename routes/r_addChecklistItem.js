const express = require('express')
const createChecklistItem = require('../controllers/c_addChecklistItem')

const router = express.Router()

router.post('/addChecklistItem', createChecklistItem)

module.exports = router