const cheerio = require('cheerio');

let $ = cheerio.load('<div><p>ÄãºÃ</p><img src="sdafa" /></div>')

console.log($('img').attr('src'))