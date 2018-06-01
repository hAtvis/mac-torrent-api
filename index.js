var koa = require('koa')
var app = new koa()
var router = require('./router')

router(app)

app.use(async ctx => {
  ctx.body = 'hello,world1'
})

app.listen(3001, () => {
  console.log('listening on 3001')
})
