require('dotenv').config
const mongoose = require('mongoose')
const { Creature } = require('./schema')


mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log('Whoop Mongo')
})

mongoose.connection.on('error', (error) => {
    console.error(`
    What is going on Mongo?!
    ${error}
    `)
    process.exit(-1)

})



const db = mongoose.connection
const saved = async () => {

}