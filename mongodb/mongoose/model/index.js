var mongoose = require('mongoose')
var config = require('../config')

mongoose.connect(config.db, {
  poolSize: 20,
  useCreateIndex: true,
  useNewUrlParser: true,
}, function(err) {
  if(err){
    console.log('connect failly, please try again')
    process.exit(1)
  }
  console.log('mongodb connect successfully!!!')
})

require('./user')


exports.User = mongoose.model('User')
