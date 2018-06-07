require('isomorphic-fetch')

var path = require('path')
var fs = require('fs')
var crypto = require('./crypto')
const { md5 } = crypto

const cacheDir = path.resolve(__dirname + '/../static/caches')


module.exports = async function(url, options) {

  const key = md5(url)
  const filepath = path.join(cacheDir, key)
  if (fs.existsSync(filepath)) {
    return fs.readFileSync(filepath)
  } else {
    const res = await fetch(url, options)
    const html = await res.text()

    fs.writeFileSync(filepath, html)

    return html
  }
}