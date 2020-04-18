const http = require('http')
const fs = require('fs')

let server = http.createServer()

server.on('request',(req,res)=>{
    let url = req.url
    if(url === '/'){
        fs.readFile('./index.html',(err,data)=>{
            if(err){
                res.setHeader('Content-Type','text/plain;charest:utf-8')
                res.end('文件读取失败！')
            }else{
                res.setHeader('Content-Type', 'text/html;charest:utf-8')
                res.end(data)
            }
        })
    }else if(url === '/img'){
        fs.readFile('./back.png',(err,data)=>{
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charest:utf-8')
                res.end('文件读取失败！')
            } else {
                res.setHeader('Content-Type', 'image/png;charest:utf-8')
                res.end(data)
            }
        })   
    }
})

server.listen(3000,()=>{
    console.log("启动成功")
})