
module.exports = function(app) {
  app.use(require('./routes/torrent').routes())
}