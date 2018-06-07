var router = require('koa-router')({
  prefix: '/api'
})
module.exports = function (app) {
  router.use(
    require('./routes/s').routes(),
    require('./routes/g').routes(),
    require('./routes/c').routes(),
  )
  app.use(router.routes())
}