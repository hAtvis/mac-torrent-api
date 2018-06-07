var request = require('../../utils/request')
var cheerio = require('cheerio')

async function latest(url) {
  const htmlBody = await request(url, { cache: 86400 })
  const $ = cheerio.load(htmlBody)

  const items =  []
  $(".st-main .kanren dl").each(function() {
    const href = $(this).find("dt a").attr("href")
    const img_url = $(this).find("dt a img").attr("src")
    const title = $(this).find("dd>p>a").text()
    const desc = $(this).find('dd .smanone2 > p').text()
    const cat = $(this).find('dd .blog_info a').first().text()
    const create_on = $(this).find('dd .blog_info > p').contents().filter(function() {
      return this.nodeType == 3
    }).text().trim()
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