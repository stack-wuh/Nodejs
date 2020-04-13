const MongoClient = require('mongodb').MongoClient,
      assert = require('assert'),
      co = require('co');
const url = 'mongodb://localhost:27017/info' , dbName = 'info' , collName = 'generator'
co(function* (){
  var db = yield MongoClient.connect(url)
  console.log('Connect corrently to server')
  var col = db.db(dbName).collection(collName)
  var r = yield col.insertMany([{a:1},{a:2},{a:3}])

  var r = yield col.updateOne({a:1},{$set:{b:1}})

  var r = yield col.updateMany({a:2},{$set:{b:1}})

  db.close()
}).catch(err => {
  console.log(err.stack)
})