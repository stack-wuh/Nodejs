//聚合
const MongoClient = require('mongodb').MongoClient,
      assert = require('assert'),
      co = require('co'),
      url = 'mongodb://localhost:27017/info',
      coll = 'users'

co(function*(){
  var db = yield MongoClient.connect(url)
  console.log('Connected Server Scussessfully!')

  var col = db.db().collection(coll)

  const arr = [
    {     
      title: 'MongoDB Overview',      
      description: 'MongoDB is no sql database',   
      by_user: 'w3cschool.cc',   
      url: 'http://www.w3cschool.cc',  
      tags: ['mongodb', 'database', 'NoSQL'],  
      likes: 100  
    }, 
    {  
      title: 'NoSQL Overview',    
      description: 'No sql database is very fast',    
      by_user: 'w3cschool.cc',   
      url: 'http://www.w3cschool.cc',   
      tags: ['mongodb', 'database', 'NoSQL'],   
      likes: 10  
    },  
    {  
      title: 'Neo4j Overview',  
      description: 'Neo4j is no sql database',   
      by_user: 'Neo4j',   
      url: 'http://www.neo4j.com',  
      tags: ['neo4j', 'database', 'NoSQL'],  
      likes: 750  
    }, 
  ]

  // var r = yield col.insertMany(arr)

  var r = yield col.aggregate([{$group:{_id:'$by_user',num_tutoral1:{$sum:1}}}]).toArray()


  // console.log(r)
  r.map(item=>{
    // console.log(item)
  })

  var r = yield col.aggregate({
    $project:{
      likes:1,
      title:1,
    }
  }).toArray()

  r.map(item=>{
    console.log(item)
  })


  db.close()
}).catch(err=>{
  console.log(err.stack)
})