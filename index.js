const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const chefs = require('./data/chefs.json');

var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Tokyo Kitchen Server is Running')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})