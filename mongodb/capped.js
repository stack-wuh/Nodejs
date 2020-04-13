//限制集合 , 验证集合
const MyClient = require('mongodb').MongoClient , 
      assert = require('assert')
var url = 'mongodb://localhost:27017/info' 
const dbName = 'info'
var createCapped = function(db,cb){
  db.db().createCollection('myCollection',{'capped':true,'size':10000,'max':5000},
    function(err,result){
      console.log('Collection created.')
      cb()
    })
}

var createValidation = function(db,cb){
  db.db().createCollection('conctacts',{
    'validator':{
      "$or":[
        {
          'phone':{'$type':'string'},
        },
        {
          'Email':{'$regex':'/@mongodb\.com$/'},
        },
        {
          'status':{'$in':['Unkown','Incomplete']}
        }
      ]
    }
  },function(err,result){
    assert.equal(err,null)
    console.log('created Collection successfully')
    cb(result)
  })
}
var insertMany = function(db,cb){
  var collection = db.db('info').collection('conctacts')
  collection.insertMany([
    {phone:'123123123',email:'asdasd',status:'ok'},  
    {phone:'123123331232233',email:'as阿萨德d',status:'ok'},  
    ],function(err,result){
    assert.equal(err,null)
    console.log('insert many successfully!')
    cb()
  }) 
}
var createAscendingIndex = function(db,cb){
  var collection = db.db('info').collection('users')
  collection.createIndex(
    {dataOfBirth:1},function(err,result){
      assert.equal(err,null)
      console.log(result)
      console.log('created index successfully!')
      cb(result)
    }
  )
}
var deleteOne = function(db,cb){
  var collection = db.db('info').collection('conctacts')
  collection.deleteOne({status:'no'},function(err,result){
    console.log(result)
    assert.equal(1,result.deletedCount)
    cb(result)
  })
}
var deleteMany = function(db,cb){
  var collection = db.db('info').collection('conctacts')
  collection.deleteMany({status:'no',phone:'123123123'},function(err,result){
    console.log(result)
    cb(result)
  })
}
var updateMany = function(db,cb){
  var collection = db.db('info').collection('conctacts')
  collection.updateMany({phone:'123123123'},{$set:{'status':'no'}},function(err,result){
    console.log(result)
    cb(result)
  })
}
MyClient.connect(url,function(err,db){
  assert.equal(err,null)
  // createCapped(db,function(){
  //   db.close()
  // })
  createValidation(db,function(){
    // insertMany(db,function(){
      // deleteMany(db,function(){
      //   db.close()
      // })
    // })
  })
  updateMany(db,function(){
    db.close()
  })
  // createAscendingIndex(db,function(){
  //   db.close()
  // })
})