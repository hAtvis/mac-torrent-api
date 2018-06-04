var router = require('koa-router')({
  prefix: '/tor',
})
var dl = require('../services/dl')

router.get('/item/:url', async ctx => {
  const url = ctx.params.url
  // url = url || 'https://mac-torrent-download.net/yummy-ftp-pro-2-0-5/'
  // const item = await dl.parse('https://mac-torrent-download.net/cleanmymac-3-9-6/')
  const item = await dl.parse(url)
  ctx.body = item
})

router.get('/items', async ctx => {
  const items = await dl.latest()
  ctx.body = items
})

module.exports = router