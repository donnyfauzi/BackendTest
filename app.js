const express       = require('express')
const bodyPaser     = require('body-parser')
const cors          = require('cors')
const app           = express()
const port          = 8080

const r_checklist                 = require('./routes/r_checklist')
const r_addChecklistItem          = require('./routes/r_addChecklistItem')

app.use(bodyPaser.json())
app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true,
  })
)


app.use('/api', r_checklist)
app.use('/api', r_addChecklistItem)


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})