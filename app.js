const express = require('express')
const bodyPaser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 8080

const r_register  = require('./routes/r_register')
const r_login = require('./routes/r_login')
const r_checklist = require('./routes/r_checklist')
const r_newChecklist = require('./routes/r_newChecklist')
const r_dltChecklist = require('./routes/r_dltChecklist')
const r_checklistItem = require('./routes/r_checklistItem')
const r_addChecklistItem = require('./routes/r_addChecklistItem')
const r_checklistItemByChecklist = require('./routes/r_checklistItemByChecklist')

app.use(bodyPaser.json())

app.use('/api', r_register)
app.use('/api', r_login)
app.use('/api', r_checklist)
app.use('/api', r_newChecklist)
app.use('/api', r_dltChecklist)
app.use('/api', r_checklistItem)
app.use('/api', r_addChecklistItem)
app.use('/api', r_checklistItemByChecklist)



app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})