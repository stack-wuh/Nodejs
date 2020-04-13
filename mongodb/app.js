const MongoClient = require('mongodb').MongoClient, 
      assert =require('assert')

      const url = 'mongodb://localhost:27017/myproject';
      const dbName = 'test';

      //CRUD 操作

      var insertDocuments = function(db,cb){ // insert 插入数据
        var collection = db.db(dbName).collection('createIndexExample1')
        collection.insert([
          {a:1},
          {a:2},
          {a:3}
        ],function(err,result){
          assert.equal(err,null);
          assert.equal(3,result.result.n);
          assert.equal(3,result.ops.length)
          console.log('Inserted 3 documents into the collection')
          cb(result)
        })
      }

      var findAllDocument = function(db,cb){ // find --> 查询所有
        var collection = db.db(dbName).collection('createIndexExample1')
        collection.find({}).toArray(function(err,docs){
          assert.equal(err,null)
          console.log('Found the following records')
          console.log(docs)
          cb(docs)
        })
      }

      var findOneDocument = function(db,cb){ // find --> 条件查询
        var collection = db.db(dbName).collection('createIndexExample1')
        collection.find({'a':3}).toArray(function(err,docs){
          assert.equal(err,null)
          console.log('Found the following records')
          console.log(docs)
          cb(docs)
        })
      }

      var updateDocument = function(db,cb){ // update 更新操作
        var collection = db.db(dbName).collection('createIndexExample1')
        collection.updateOne({a:2},{$set:{b:1}},function(err,result){
          assert.equal(err,null)
          assert.equal(1,result.result.n)
          console.log('Update the document successfully')
          cb(result)
        })
      }

      var removeDocument = function(db,cb){ // delete --> 删除一条数据
        var collection = db.db(dbName).collection('createIndexExample1')
        collection.deleteAll({a:3},function(err,result){
          assert.equal(err,null)
          assert.equal(1,result.result.n)
          console.log('Removed the document with the field a equla')
          cb(result)
        })
      }

      MongoClient.connect(url,function(err,db){
        assert.equal(null,err);
        console.log('Connected successfully to server')
        insertDocuments(db,function(){
          updateDocument(db,function(){
            removeDocument(db,function(){
              db.close()
            })
          })
        })
      })
