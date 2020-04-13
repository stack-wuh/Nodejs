const path = require('path')

console.log(path.basename('./demo1.js', '.js'), __dirname, __filename)
console.log(process.env.PATH)
console.log(
	process.env.PATH.split(path.delimiter)
)
console.log(path.delimiter, 'this is delimiter')
console.log(path.dirname('./demo1.js'))
console.log(path.extname('./demo1.js'))

let test1 = path.format({
	root:'./',
	base:'demo1.js'
})
console.log(test1, 'this is test1')
let test2 = path.parse('c:\\path\\dir\\file.txt')
console.log(test2)

console.log(path.sep)