var fs = require('fs')
var path = require('path')
var ejs = require('ejs')

const staticPath = path.join(__dirname, '../static')

function generate(templateName, outputFilename, data) {
  const template = fs.readFileSync(path.resolve(staticPath + `/templates/${templateName}.md`), 'utf-8')
  const output = ejs.render(template, data)
  return fs.writeFileSync(path.resolve(staticPath + `/generated/${outputFilename}.md`), output)
}

module.exports = {
  generate
}
