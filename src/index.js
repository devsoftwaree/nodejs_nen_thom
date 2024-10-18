// Express library
const express = require('express')
const app = express()
const port = 3000

// HTTP loger
const morgan = require('morgan')
app.use(morgan('combined'))

// Template engine
const handlebars = require('express-handlebars')
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})