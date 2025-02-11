const express = require("express")
const router = express.Router()
const { addChecklist } = require("../controllers/c_newChecklist")

router.post('/addChecklist', addChecklist)

module.exports = router
