const express = require('express')
const bodyParser = require(`body-parser`)
const app = express()
app.use(bodyParser.urlencoded())

const port = process.env.PORT || 8080

app.get('/', (req, res) =>

{
res.render(`index.ejs`)
})

