var request = require('../../utils/request')
var cheerio = require('cheerio')

async function latest(url) {
  const htmlBody = await request(url, { cache: 86400 })
  const $ = cheerio.load(htmlBody)

  const items =  []
  $("#content article").each(function() {
    const that = $(this)
    const href = that.find(">a").attr("href")
    const img_url = that.find("figure > a > img").attr("src")
    const title = that.find(".post-content .post-title a").text()
    const desc = ''
    const cat = that.find('.post-category a').text()
    const create_on = that.find('.post-date').attr('datetime')
    items.push({
      href,
      title,
      img_url,
      desc,
      cat,
      create_on,
    })
  })
  return items
}

module.exports = latest