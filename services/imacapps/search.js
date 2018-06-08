var request = require('../../utils/request')
var cheerio = require('cheerio')

async function search(keyword, ctx) {
  const url = `${ctx.home_url}index.php/component/search/?searchword=${keyword}&searchphrase=all&Itemid=101`
  const htmlBody = await request(url, { cache: 86400 })
  const $ = cheerio.load(htmlBody)

  const items =  []
  const baseUrl = ctx.home_url.substring(0, ctx.home_url.length -1)
  $(".search__results dt").each(function() {
    const that = $(this)
    const dd = that.next()
    const a = that.find("a")
    const href = baseUrl + a.attr("href")
    
    const img_url = ''
    const title = a.text().trim()
    const desc = dd.find("p").text().trim()
    const cat = dd.find(".result__category").text().trim()
    const create_on = dd.find('.result__created').text().trim()
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

module.exports = search