const EventEmitter = require('events')
class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter()
let m = 0
myEmitter.once('event',function(a,b){
  console.log('触发了一个事件了')
  console.log(a,b,this)
  console.log(++m)
})
myEmitter.on('error',(err)=>{
  console.log('这里有一个错误')
})
myEmitter.emit('event','a','b')
myEmitter.emit('event')
myEmitter.emit('error',new Error('this is a err'))

console.log(EventEmitter.listenerCount(myEmitter,'event'))
