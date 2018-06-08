var list = require('./list')

async function latest(ctx) {
  return list(ctx.home_url + '?t=033774a17acee6ea5c77b73f98f6d278de2bb635')
}

module.exports = latest