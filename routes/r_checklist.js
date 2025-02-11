const express = require('express')
const { getChecklists } = require('../controllers/c_checklist')

const router = express.Router()

router.get('/checklist', getChecklists)

module.exports = router
