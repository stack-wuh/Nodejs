const MongoClient = require('mongodb').MongoClient,
      assert = require('assert'),
      co = require('co'),
      url = 'mongodb://localhost:27017/info',
      collName = 'users'
co(function*(){
  var db = yield MongoClient.connect(url)
  var col = db.db().collection(collName)
  console.log('Collection is connect suceessfully')

  var r = yield col.findOne({likes:10})

  var r = yield col.aggregate([
    {$project:{
      _id:0,
      title:1,
      likes:1,
    }}
  ]).toArray()
  r.map(item=>{
    console.log(item) 
  })
  
  // var r = yield col.aggregate([
  //   {$match:{likes:{$gt:100}}},
  //   // {$group:{_id:null,likes:{$sum:1}}}
  // ]).toArray()
  // r.map(item => {
  //   console.log(item)
  // })

  db.close()
})