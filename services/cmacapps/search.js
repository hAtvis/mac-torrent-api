var list = require('./list')
var queryString = require('query-string')

module.exports = async function(keyword, ctx) {
  const url = `${ctx.home_url}?${queryString.stringify({s: keyword})}`
  return list(url)
}