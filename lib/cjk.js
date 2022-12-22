const BLOG = require('../blog.config')

module.exports = function cjk() {
  switch (BLOG.lang.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return 'SC'
    case 'zh':
    case 'zh-hk':
    case 'zh-tw':
      return 'TC'
    case 'ja':
    case 'ja-jp':
      return 'JP'
    case 'ko':
    case 'ko-kr':
      return 'KR'
    case 'id':
    case 'id-id':
      return 'ID'
    case 'jv':
    case 'jv-id':
      return 'ID'
    default:
      return null
  }
}
