var fs = require('fs')
var path = require('path')
var ejs = require('ejs')
var TurndownService = require('turndown')

const staticPath = path.join(__dirname, '../static')

var turndownService = new TurndownService()

async function convert(templateName, data) {
  const template = fs.readFileSync(path.resolve(staticPath + `/templates/${templateName}.md`), 'utf-8')
  const _data = {}
  Object.keys(data).forEach(k => {
    if (typeof data[k] === 'string') {
      _data[k] = turndownService.turndown(data[k])
    } else {
      _data[k] = data[k]
    }
  })
  return ejs.render(template, _data)
}

function saveToFile(outputFilename, data) {
  return fs.writeFileSync(path.resolve(staticPath + `/generated/${outputFilename}.md`), data)
}

module.exports = {
  saveToFile,
  convert
}
