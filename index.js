'use strict'

exports.name = 'datauri'
exports.inputFormats = ['html']
exports.outputFormat = 'html'

const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();

exports.renderAsync = url => {
  const resize = url.match(/(:\d+x\d+)/gim)

  if (!resize) return require('datauri')(url)

  const r = resize[0].replace(':','').split('x')
  return require('sharp')(url.replace(resize[0], '')).resize(parseInt(r[0]), parseInt([1])).toBuffer().then(x =>
    parser.format('.png', x)
  ).then(x => x.content)
}

exports.render = url =>
  String(require('child_process').execSync(`node ${__filename} ${url}`))


if (process.argv[2]) exports.renderAsync(process.argv[2])
  .then(console.log).then(() => process.exit(0))
