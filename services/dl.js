var request = require('../utils/request')
var cheerio = require('cheerio')
var translate = require("google-translate-api")

async function latest() {
  
}

async function parse(url) {
  const htmlBody = await request(url)
  const $ = cheerio.load(htmlBody)

  var title = $(".entry-title").text()
  var tag = $('.catname').text()
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
    tag,
    img_url,
    app_cap_img_url
  }
  let lines = []
  $(".entry-content").children().each(function () {
    var text = $(this).text()
    if (this.name.toUpperCase() != 'DIV' && text.length > 0) {
      lines.push([text, this.name])
    }
  })

  const res = await translate(lines.map(r => r[0]).join('\n'), { to: 'zh-cn'})
  const translatedLines = res.text.split('\n')
  
  item.introduce = translatedLines.map((r, i) => {
    const tag = lines[i][1]
    return `<${tag}>${r}<${tag}>`
  }).join('')

  return item
}

module.exports = {
  parse
}