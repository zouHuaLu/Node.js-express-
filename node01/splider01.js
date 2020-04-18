const http = require("http"); //http 请求
//var https = require("https"); //https 请求
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request({
    url:'http://baidu.com',
    method:'get',
    path:'/album?page=1',
    headers:{
        'User-Agent':'Mozilla/ 5.0(Windows NT 10.0; Win64; x64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 80.0.3987.149 Safari / 537.36',
        'Accept':'application/json, text/plain, */*',
        'Accept-Language':'zh-CN,zh;q=0.9,ko;q=0.8,en;q=0.7',

    }
},(err,res,body)=>{
    fs.writeFileSync('./dilili.html',body)
    // console.log(body.toString())
})