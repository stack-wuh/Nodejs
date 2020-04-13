console.log(__dirname, __filename)

let result = require.resolve('../http/createServer.js')
console.log(result)
let result1 = require.resolve.paths('../http/createServer.js')
console.log(result1)