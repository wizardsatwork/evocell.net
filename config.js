const path = require('path')

const HTML = require('@mspg/transpile-posthtml')
const CSS = require('@mspg/transpile-stylus')
// const JS = require('@mspg/transpile-babel')

const year = new Date().getFullYear()

module.exports = {
  TRANSPILERS: {
    HTML,
    CSS,
    // JS,
  },
  year,
  IGNORE_EXTENSIONS: ['ai', 'psd', 'xcf'],
  WEB_ROOT: '/evocell.net/',

  OUT_DIR: path.join(process.cwd(), 'docs'),
}
