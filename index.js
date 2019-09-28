'use strict'

exports.name = 'datauri'
exports.inputFormats = ['html']
exports.outputFormat = 'html'

exports.render = require('datauri').sync
