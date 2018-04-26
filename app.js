require('dotenv').config
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const logger = require('morgan')

const bodyParser = require('body-parser')
//const methodOverride = require('method-override')

const app = express()
//app.use(methodOverride('_method'))

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)


const db = mongoose.connection
db.on('error', err => {
    console.log(err)
})

db.on('open', () => {
    console.log('Connected to MongoDB')
})

db.once('open', () => {
    console.log('Space Connection!')
})

app.use(logger('dev'))
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.send("What it do little Moon")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('What it do pikachu' + PORT)
})