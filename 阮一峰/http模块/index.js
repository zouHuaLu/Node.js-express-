const fs = require('fs')
const http =require('http')
const url = require('url')
const path = require('path')

// let server = http.createServer((req,res)=>{
//     console.log(req.method + ':' + req.url)
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.end()
// })

// server.listen(3000,()=>{
//     console.log('运行在http://localhost:3000')
// })


//parese()解析将字符串为url对象
// console.log(url.parse('http://localhost:3000/path/to/file?query=string#hash'))

//解析当前目录
// let workDir = path.resolve('.')
// let filePath = path.join(workDir,'pub','index.html')

//文件服务器
let root = path.resolve(process.argv[2] || '.')
console.log('Static root dir:' + root)

let server = http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname
    let filepath = path.join(root,pathname)
    fs.stat(filepath,(err,stats)=>{
        if(!err && stats.isFile()){
            console.log('200'+req.url)
            res.writeHead(200)
            fs.createReadStream(filepath).pipe(res)
        }else{
            console.log(404+req.url)
            res.writeHead(404)
            res.end('404 Not Found')
        }
    })
})

server.listen(3000,()=>{
    console.log('运行在http://localhost:3000')
})