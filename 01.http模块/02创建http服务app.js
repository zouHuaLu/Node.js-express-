const http = require('http')

http.createServer((req,res)=>{
    // 获取url
    console.log(url.parse(req.url))

    // 设置响应头
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})

    res.write('这是nodejs')

    res.end()
}).listen(3000)