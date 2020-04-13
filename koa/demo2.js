var Koa = require('koa')
var app = new Koa()

const main = (ctx, next) => {
    ctx.response.type = 'xml'
    ctx.response.body = `<data><h3>Hello World!</h3></data>`
    next()
}

app.use(main)
app.listen(3001)