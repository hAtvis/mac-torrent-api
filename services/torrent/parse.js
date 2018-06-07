var request = require('../../utils/request')
var cheerio = require('cheerio')
var translate = require("google-translate-api")

async function parse(url) {
  const htmlBody = await request(url, { cache: true })
  const $ = cheerio.load(htmlBody)

  var title = $(".entry-title").text()
  var cat = $('.catname').text()
  var img_url = $(".mv_img img").attr("src")
  var app_cap_img_url =[]
   $(".app_cap_img img").each(function() {
    app_cap_img_url.push($(this).attr('src'))
   })
  var map_keys = {
    "Name": "file_name",
    "Size": "size",
    "Created on": 'create_on',
    'Hash': 'hashcode',
    'Files': 'files',
  }
  var item = {}
  $(".mv_box_in tr").each(function () {
    var key = $(this).find('th').text()
    var value = $(this).find('td').text()
    item[map_keys[key]] = value
  })
  var item = {
    ...item,
    title,
    cat,
    img_url,
    app_cap_img_url
  }
  let lines = []
  let skip = 0
  $(".entry-content").children().each(function () {
    if (skip++ < 3) {
      return true
    }
    var text = $(this).text()
    var tag = this.name.toLowerCase()
    
    if (text.length > 0 && tag != 'div' ) {
      if (tag == 'ol') {
        lines.push([$(this).html(), this.name, false])
      } else {
        lines.push([text, this.name, true])
      }
    }
  })

  const res = await translate(lines.filter(r => r[2]).map(r => r[0]).join('\n'), { to: 'zh-cn'})
  const translatedLines = res.text.split('\n')
  
  let n = 0;
  item.introduce = lines.map((r, i) => {
    let html = r[0]
    if (r[2]) {
      html = translatedLines[n++]
    }
    const tag = r[1]
    return `<${tag}>${html}</${tag}>`
  }).join('')

  return item
}

module.exports = parse