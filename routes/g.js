var router = require('koa-router')({
  prefix: '/g',
})

var bodyParser = require('koa-bodyparser');


var md = require('../services/md')

router.post('/md', bodyParser(), async ctx => {
  const reqBody = ctx.request.body
  md.generate('post', reqBody.title, reqBody)
  ctx.body = {
    rc: 0,
    message: 'Success'
  }
})

router.get('/md', async ctx => {
  ctx.body =  'please use post method'
})

module.exports = router