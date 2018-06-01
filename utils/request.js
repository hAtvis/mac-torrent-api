require('isomorphic-fetch')

module.exports = async function(url, options) {
  const res = await fetch(url, options)
  return await res.text()
}