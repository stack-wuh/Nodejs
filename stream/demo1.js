var fs = require('fs')

var rs = fs.createReadStream('./text.txt', {hignWaterMark: 11})
rs.setEncoding('base64')
var data = ''

rs.on('data', trunk => {
  data += trunk
})

rs.on('end', () => {
  console.log(data)
})
