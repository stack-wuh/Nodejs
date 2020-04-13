var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  name: {type: String},
  loginName: {type: String},
  pass: {type: String},
  email: {type: String},
  avatar: {type: String}
})

mongoose.model('User', UserSchema)
