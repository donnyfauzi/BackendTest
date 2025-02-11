const express = require('express')
const { deleteChecklist } = require('../controllers/c_dltChecklist')
const { verifyToken } = require('../middlewares/login')

const router = express.Router()

router.delete('/deleteChecklist/:id', verifyToken, deleteChecklist)

module.exports = router
