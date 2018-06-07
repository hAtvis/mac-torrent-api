var router = require('koa-router')({
  prefix: '/s',
})
var serviceFactory = require('../services')

router.get('/item/:url', async ctx => {
  const url = ctx.params.url
  const item = await ss.parse(url)
  ctx.body = item
})

router.get('/items', async ctx => {
  const ss = serviceFactory()
  const items = await ss.latest()
  ctx.body = items
})

router.post('/test', async ctx => {
  ctx.body = 'test post'
})

module.exports = router