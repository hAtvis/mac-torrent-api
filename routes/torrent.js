var router = require('koa-router')()
var dl = require('../services/dl')

router.get('/api', async ctx => {
  // const item = await dl.parse('https://mac-torrent-download.net/cleanmymac-3-9-6/')
  const item = await dl.parse('https://mac-torrent-download.net/yummy-ftp-pro-2-0-5/')
  console.log(item)
  ctx.body = item
})

module.exports = router