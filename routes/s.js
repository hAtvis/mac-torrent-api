var router = require('koa-router')({
  prefix: '/s',
})
var serviceFactory = require('../services')

router.get('/:channel/item/:url', async ctx => {
  const url = ctx.params.url
  const ss = serviceFactory(ctx.params.channel)
  const item = await ss.parse(url)
  ctx.body = item
})

router.get('/:channel/items', async ctx => {
  const channel = ctx.params.channel
  const ss = serviceFactory(channel)
  const items = await ss.latest()
  ctx.body = items
})

router.post('/test', async ctx => {
  ctx.body = 'test post'
})

router.get('/:channel/search', async ctx => {
  const channel = ctx.params.channel
  const ss = serviceFactory(channel)
  const keyword = ctx.query.s
  const items = await ss.search(keyword)
  ctx.body = items
})

module.exports = router