var net = require('net')

var server = net.createServer(socket => {
  socket.on('data', data => {
    socket.write('hello')
  })

  socket.on('end', () => {
    console.log('socket已断开')
  })
  socket.write('welcome to node js for tcp \n : yes')
})

server.listen(8222, '127.0.0.1', () => {
  console.log('server bound')
})
