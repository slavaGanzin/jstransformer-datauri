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
