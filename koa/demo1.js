var Koa = require('koa')
var app = new Koa()

app.use((ctx, next) => {
    ctx.body = 'hello world'
    next()
})

app.listen(3001)