//dirname -- 当前模块的文件夹路径
// filename -- 绝对路径
const path = require('path')

console.log(__dirname + 'THIS IS DIRNAME')
console.log(path.dirname(__filename))