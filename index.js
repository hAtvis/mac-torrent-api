var Koa = require('koa')
var app = new Koa()
var router = require('./router')
var path = require('path')
const serve = require('koa-static');

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

app.use(serve(__dirname + '/public'))

// app.use(async ctx => {
//   ctx.body = 'hello,world'
// })
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log('listening on ' + port)
})
