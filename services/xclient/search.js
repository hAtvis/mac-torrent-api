var list = require('./list')
async function search(keyword, ctx) {
  const url = `${ctx.home_url}search/s/${keyword}/?t=033774a17acee6ea5c77b73f98f6d278de2bb635`
  return list(url)
}

module.exports = search