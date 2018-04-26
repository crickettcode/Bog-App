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

Creature.remove().then(() => {
    const lucas = new Creature({ name: 'Lucas', description: 'datJedi' })
    return lucas.save()
}).then(() => {

    const darthus = new Creature({ name: 'Darthus Vader', description: 'Father of Lucas' })
    return darthus.save()
}).then(() => {
    db.close()
})


const db = mongoose.connection
const saved = async () => {

}