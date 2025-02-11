const express = require('express')
const { addChecklist } = require('../controllers/c_newChecklist')
const { verifyToken } = require('../middlewares/login')

const router = express.Router();

router.post('/addChecklist',verifyToken, addChecklist)

module.exports = router
