var Koa = require('koa')
var app = new Koa()
var compose = require('koa-compose')

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    next()
}

const main = (ctx, next) => {
    ctx.response.body = 'hello world'
    next()
}

const middlewares = compose([logger, main])
app.use(middlewares)
app.listen(3001)