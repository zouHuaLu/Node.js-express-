/*
1.请求网站数据
2.将数据保存本地
*/

const https = require('https');
const http = require('http');
const fs = require('fs');
const cheerio = require('cheerio');
let url = 'http://www.baidu.com'
let baiduimg = 'https://image.baidu.com/'
https.get(baiduimg,(res)=>{
    const {statusCode} = res;
    const contentType = res.headers['content-type'];

    console.log(statusCode,contentType)
    let err = null;
    if(statusCode !== 200){
        err = new Error('请求状态码错误');
    }else if(!/^text\/html/.test(contentType)){
        err = new Error('请求类型错误')
    }

    if(err){
        console.log(err)
        res.resume();//重置缓存
        return false
    }


    //数据分段，只要接收数据就会触发data，事件chunk 每次接收的数据片段
    let setuData;
    function receive(){
        res.on('data',(chunk)=>{
            console.log('数据传输中')
                setuData += chunk.toString('utf8');
            // baiduData+=chunk.toString('utf8');
        })
    }

    // setInterval(receive,10000)
    receive();
    res.on('end',()=>{
        console.log('数据传输完毕')
        //保存到本地
        // fs.writeFileSync('./baidu.html',baiduData)
        // let $ = cheerio.load(setuData);
        // $('img').each((index,el)=>{
        //     console.log($(el).attr('src'))
        // })
        fs.writeFileSync('./setu.html',setuData)
    })
}).on('error',(err)=>{
    console.log('请求错误')
})

/*
let obj = {name:123,age:46}

*/
