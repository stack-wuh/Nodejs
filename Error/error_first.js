const fs = require('fs')
const assert = require('assert')

const errorFirstCb = (err, data) => {
	if(err){
		console.error(err)
		return
	}
	let buffer = Buffer.from(data, 'utf8')
	console.log(data)
	console.log(buffer.toString())
}

fs.readFile('./demo1.js', errorFirstCb)

assert.strictEqual(1,2)
