var request = require('../../utils/request')
var cheerio = require('cheerio')

async function latest(url, ctx) {
  const htmlBody = await request(url, { cache: 86400 })
  const $ = cheerio.load(htmlBody)

  const items =  []
  const baseUrl = url.substring(0, url.length -1)
  $(".content__items article").each(function() {
    const that = $(this)
    const a = that.find("h2.item__title > a")
    const href = baseUrl + a.attr("href")
    
    const img_url = baseUrl + that.find('img').attr('src')
    const title = a.text().trim()
    const desc = that.find(".item__summary > a").text().trim()
    const cat = ''
    const create_on = that.find('.item__info_item > time').attr('datetime')
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