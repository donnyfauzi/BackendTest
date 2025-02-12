const express = require('express')
const getChecklistItemByChecklist = require('../controllers/c_checklistItemByChecklist')
const { verifyToken } = require('../middlewares/login')

const router = express.Router()

router.get('/checklistItemByChecklist/:id/items', verifyToken, getChecklistItemByChecklist)

module.exports = router