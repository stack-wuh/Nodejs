const express = require('express')
const utility = require('utility')

var app = express()
app.get('/', function(req, res){
  const q = req.query
  const md5Val = utility.md5(q)
  res.send({
    data: md5Val,
    msg: '请求成功'
  })
})

app.listen(8200, function(){
  console.log('node server is runing successfully!')
})
