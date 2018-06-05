var Koa = require('koa')
var app = new Koa()
var router = require('./router')

const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.type = 'html';
    ctx.response.body = err.message 
    ctx.app.emit('error', err, ctx);
  }
}

app.use(handler)

router(app)

// app.use(async ctx => {
//   ctx.body = 'hello,world'
// })

app.listen(3001, () => {
  console.log('listening on 3001')
})
