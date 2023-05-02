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

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChefs = news.find(n => n._id === id);
    res.send(selectedChefs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})