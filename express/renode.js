const express  = require('express')
const superAgent = require('superAgent')
const cheerio = require('cheerio')
const MongoClient = require('mongodb').MongoClient

const app = express()

const insertDocs = (data, db) => {
  console.log(db)
  var collection = db.db('info').collection('nodes')
  collection.insert(data)
}

app.get('/', function(req, res, next) {
  superAgent.get('https://cnodejs.org')
    .end(function(err, sres) {
      if(err){
        return next(err)
      }

      var $ = cheerio.load(sres.text)
      var items = []
      $('#topic_list .topic_title').each(function(idx, elem){
        var $elem = $(elem)
        items.push({
          title: $elem.attr('title'),
          href: $elem.attr('href'),
        })
      })
      let response = {
        info: sres,
        data: items
      }

      MongoClient.connect('mongodb://localhost:27017/myproject',
        function(err, db){
          console.log('Collected successfully to server')
          insertDocs(items, db)
        })
      res.send(response)
    })
})

app.listen(8220, function() {
  console.log('server is running successfully!!')
})
