const express = require('express')
const bodyPaser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 8080

const r_register  = require('./routes/r_register')
const r_login = require('./routes/r_login')
const r_checklist = require('./routes/r_checklist')
const r_newChecklist = require('./routes/r_newChecklist')


app.use(bodyPaser.json())

app.use('/api', r_register)
app.use('/api', r_login)
app.use('/api', r_checklist)
app.use('/api', r_newChecklist )



app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})