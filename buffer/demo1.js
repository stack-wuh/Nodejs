const buf = Buffer.from('hello world','ascii')
console.log(buf.toString('hex'))
console.log(buf.toString('base64'))
console.log('----------')
var buf1 = Buffer.alloc(10,'00','utf8')
console.log(buf1)