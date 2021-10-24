const url = require('url')

var api = 'http://www.zouhualu.com?name=zhangsan&age=26'

console.log(url.parse(api,true).query)