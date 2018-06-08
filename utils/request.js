require('isomorphic-fetch')

var path = require('path')
var fs = require('fs')
var crypto = require('./crypto')
const { md5 } = crypto

const cacheDir = path.resolve(__dirname + '/../static/caches')


module.exports = async function (url, options) {

  options = options || {}
  const key = md5(url)
  const filepath = path.join(cacheDir, key)
  if (typeof options.cache == 'boolean') {
    options.cache = {
      expire: Date.now() + 10 * 86400 * 365 * 1000
    }
  } else if (typeof options.cache == 'number') {
    options.cache = {
      expire: Date.now() + options.cache * 1000,
    }
  } else if (typeof options.cache == 'object') {
    options.cache = {
      expire: Date.now() + options.cache.expire * 1000
    }
  }
  if (options.cache) {
    if (fs.existsSync(filepath)) {
      const cached = JSON.parse(fs.readFileSync(filepath))
      if (cached.expire > Date.now()) {
        return cached.html
      }
    }
  }

  // const wrappedFetch = require('socks5-node-fetch')
 
  // const fetch = wrappedFetch({
  //   socksHost: 'localhost',
  //   socksPort: '1086'
  // })

  const res = await fetch(url, options)
  const html = await res.text()

  if (options.cache) {
    const fileData = { expire: options.cache.expire, html}
    fs.writeFileSync(filepath, JSON.stringify(fileData))
  }

  return html
}