var request = require('../../utils/request')
var cheerio = require('cheerio')

async function latest(url, ctx) {
  const htmlBody = await request(url, { cache: 86400 })
  const $ = cheerio.load(htmlBody)

  const items =  []
  $(".post_list li").each(function() {
    const that = $(this)
    const a = that.find(".main > a")
    const href = a.attr("href")
    const img_url = a.children('img').attr('src')
    const title = a.attr('title')
    const desc = a.find(".info > p").text().trim()
    const cat = that.find('.cates > a').text()
    const create_on = a.find('.date').text().trim()
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