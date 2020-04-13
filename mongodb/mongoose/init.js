const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/test'

const ConnBase = () => {
  mongoose.connect(url, {useNewUrlParser: true})

  var db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error: '))
  db.once('open', function(){
    console.log('connected successfully!')

    let Schema = mongoose.Schema({
      category: String,
      name: String,
    })
    Schema.methods.eat = function (){
      console.log('this is eat method' + this.name)
    }
    let Model = mongoose.model('fruit', Schema)
    let apple = new Model({category: 'apple1', name: 'apple1'})
    // apple.save((err, model) => {
    //   if(err) return console.log(err)
    //   apple.eat()
    //   Model.find({name: 'apple'}, (err, data) => {
    //     console.log(data)
    //   })
    // })
    Model.deleteOne({name: 'apple'}, (err, data) => {
      if(err) return console.log('remove fail')
    })
    Model.update({name: 'apple1'}, {$set: {money: '$20', name: 'apple1-1'}}, {multi: true}, (err, data) => {
      if(err) return console.log(err)
      console.log('this is update data: ' + data)
    })
    Model.find({}, (err, data) => {
      console.log(data)
    }).select({name: '', _id: 1}).sort({name: -1})
  })

}

ConnBase()

module.exports = ConnBase
