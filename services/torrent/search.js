var list = require('./list')
var queryString = require('query-string')

async function search(keyword, ctx) {
  const url = `${ctx.home_url}?${queryString.stringify({s: keyword})}`
  return list(url)
}

module.exports = search