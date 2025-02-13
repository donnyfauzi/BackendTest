const express       = require('express')
const bodyPaser     = require('body-parser')
const swaggerJsDoc  = require("swagger-jsdoc")
const swaggerUi     = require("swagger-ui-express")

const app = express()
const port = 8080

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Dokumentasi",
      version: "1.0.0",
      description: "Dokumentasi API dengan Swagger",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        BearerAuth: [], 
      },
    ],
    tags: [
      { name: "Register" },
      { name: "Login" },
      { name: "Get Checklist" },
    ],
  },
  apis: ["./routes/*.js"], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

const r_register                  = require('./routes/r_register')
const r_login                     = require('./routes/r_login')
const r_checklist                 = require('./routes/r_checklist')
const r_newChecklist              = require('./routes/r_newChecklist')
const r_dltChecklist              = require('./routes/r_dltChecklist')
const r_checklistItem             = require('./routes/r_checklistItem')
const r_addChecklistItem          = require('./routes/r_addChecklistItem')
const r_checklistItemByChecklist  = require('./routes/r_checklistItemByChecklist')

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
  console.log(`Swagger UI berjalan di http://localhost:${port}/api-docs`)
})