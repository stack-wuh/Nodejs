const mongoose = require('mongoose')

var kittySchema = new mongoose.Schema({
  name: String,
  size: Number
})

kittySchema.methods.speak = function (){
  console.log(this.name, this.size)
}

module.exports = kittySchema
