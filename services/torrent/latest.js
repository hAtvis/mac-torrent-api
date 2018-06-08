var list = require('./list')

async function latest(ctx) {
  return list(ctx.home_url)
}

module.exports = latest