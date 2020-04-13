const a = require('./module1')
a.on('ready', res => {
	console.log('module a is ready')
})