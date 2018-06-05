var fs = require('fs')
var cheerio = require('cheerio')
const html =  fs.readFileSync('input.html', 'utf-8')

const $ = cheerio.load(html)

// $(".st-main .kanren dl").each(function() {
//   const cat = $(this).find('dd .blog_info a').first().text()
//   console.log(cat)
// })

$(".entry-content").children(":gt(3)").each(function(){
  console.log(this)
})