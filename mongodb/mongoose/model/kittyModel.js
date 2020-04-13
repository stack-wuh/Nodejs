const mongoose = require('mongoose')
const kittySchema = require('../schema/kittySchema')

var kitten = mongoose.model({name: 'shadow', size: '5'}, kittySchema)

kitten.speak()
