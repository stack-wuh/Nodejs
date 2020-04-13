const fs = require('fs')

var data = 'Hello ,Node Js '

//读取文件
var info = fs.readFileSync('output.txt','utf-8')
console.log(info , 'this is read')
var buf = Buffer.from('Hello world','utf-8')
console.log(buf , 'this is string to buf')
var text = buf.toString()
console.log(text , 'this is buf to string')

//写入文件
fs.writeFile('output.txt',data,(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log('is ok')
	}
})

//读取文件信息
fs.stat('output.txt',(err,stat)=>{
	if(err){
		console.log(err)
	}else{
		console.log('isFile'+ stat.isFile())  // 是否是文件
		console.log('isDirectory' + stat.isDirectory())  // 是否是目录
		if(stat.isFile()){
			console.log('size' + stat.size)
			console.log(stat)
		}
	}
})