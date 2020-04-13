const crypto = require('crypto')
const hash = crypto.createHash('md5')

var secret = 'hello world!'
hash.update('Hello world')
hash.update('Hello Nodejs')
console.log(hash.digest('hex'))

const hash1 = crypto.createHash('sha23', secret)
										.update('this is item')
										.digest('hex')
console.log(hash1)