//提供了http模块，主要用于搭建HTTP服务端和客户端，如果要使用HTTP服务器或客户端功能，则必须调用http模块
const http = require('http')
const fs = require('fs')
const url = require('url')

//创建服务器
http.createServer((request,response)=>{
    //解析请求，包括文件名
    let pathname = url.parse(request.url).pathname
    //输出请求的文件名
    console.log('请求：'+pathname+'收到')

    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1),(err,data)=>{
        if(err){
            console.error(err)
            response.writeHead(404,{'Content-Type':'text/html'})
        }else{
            response.writeHead(200,{'Content-Type':'text/html'})
            response.write(data.toString())
        }
        response.end()
    })
}).listen(3000)
console.log('启动成功')