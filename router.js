var router = require('koa-router')({
  prefix: '/mt'
})
module.exports = function(app) {
  router.use(require('./routes/torrent').routes(), require('./routes/g').routes())
  app.use(router.routes())
}