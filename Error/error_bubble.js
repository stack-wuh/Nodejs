/**
 * 错误的冒泡与捕捉
 */
const fs = require('fs')
try{
	const m = 1
	const n = m + z
}catch(err){
	console.error(err)
}

/**
 * 同步函数中的错误事件
 */

fs.readFileSync('一个不存在的文件', (err, data) => {
	if(err){
		console.error(err)
		return
	}
})

/**
 * EventEmitter对象
 *
 * */
const net = require('net')
const connection = net.connect('localhost')
connection.on('error', err => {
	console.error(err)
})
connection.pipe(process.stdout)