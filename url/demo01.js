const {URL} = require('url')
const url = require('url')
const _url = 'https://github.com/stack-wuh/test_doctor/blob/master/docs/2018-08-22.readme.md#hase'

const myUrl = new URL(_url)
const myUrl1 = url.parse(_url)
console.log(myUrl)
console.log(myUrl1)