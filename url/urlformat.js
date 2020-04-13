const {URL} = require('url')
const url = require('url')
const myUrl = new URL('https://a:b@你好你好?abc#foo')
console.log(myUrl.href)

console.log(myUrl.toString())

let format = url.format(myUrl , {
	fragment : true ,
	unicode : true ,
	auth : false
})
console.log(format)
//https://你好你好/?abc fragment false
//https://你好你好/?abc#foo fragment true