var Router = require('koa-router')

var router = new Router({
  prefix: '/c'
})

var channels = require('../common/constants/channel')

router.get('/', async ctx => {
  ctx.body = channels.map(({name, desc}) => ({
    name,
    desc,
  }))
})

module.exports = router