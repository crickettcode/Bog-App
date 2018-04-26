require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', err => {
    console.log(err)
})

db.on('open', () => {
    console.log('Connected to MongoDB')
})
app.use(logger('dev'))
app.use(bodyParser.json())

app.use(express.static(`${__dirname}/client/build`))

//below your api routes
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


app.get('/', (req, res) => {
    res.send("What it do little Moon")
})


const PORT = process.env.PORT || 3001
console.log('app is up and running on port 3001')

app.listen(PORT, () => {
    console.log('What it do pikachu' + PORT)
})



