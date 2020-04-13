var MongoClinet = require('mongodb').MongoClient , 
    assert = require('assert') , 
    co = require('co'),
    url = 'mongodb://localhost:27017/info',
    dbName = 'info',
    collName = 'findOneAnd'
co(function* (){
  var db = yield MongoClinet.connect(url)
  console.log('Connected succssfully!')

  var col = db.db().collection(collName)
  // var r = yield col.insert([{a:1},{a:2},{a:3}])
  // console.log(r.result)
  // assert.equal(3,r.result.n)
  // var r = yield col.findOneAndUpdate({a:1},{$set:{b:1}},{returnOrigin:false,sort:[['a',1]],upsert:true})
  // console.log(r.value)
  // var r = yield col.findOneAndDelete({a:2})
  // console.log(r.value)
  var r = yield col.find({a:1}).limit(2).toArray()
  for(var k in r){
    // console.log(r[k])
  }
  console.log('-------')
  var r = yield col.find({}).filter({a:1}).skip(1).limit(5).toArray()
  console.log(r,'this is 1-1')
  db.close()
}).catch(err=>{
  console.log(err.stack)
})