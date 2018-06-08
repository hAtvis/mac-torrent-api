var latest = require('./latest')
var queryString = require('query-string')
async function search(keyword, ctx) {
  const url = `${ctx.home_url}/?${queryString.stringify({s: keyword})}`
  return latest(url)
}

module.exports = search