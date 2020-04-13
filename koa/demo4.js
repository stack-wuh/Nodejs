var Koa = require('koa')
var app = new Koa()
var fs = require('fs')

const main = (ctx, next) => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./template.html')
}

app.use(main)
app.listen(3001)