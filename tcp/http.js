var http = require('http')
var url = require('url')

http.createServer((req, res) => {
  console.log(req.url)
  var data = url.parse(req.url).query
  res.setHeader('Set-Cookie', {'isFirstVisited': false})
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World', data)
}).listen('8202', '127.0.0.1')

console.log('server is runing at http:// 127.0.0.1:8202')
