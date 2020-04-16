//使用node创建客户端

const http = require('http')

let options = {
    host:'localhost',
    port:'3000',
    path:'./index.html'
}

let callback = function(response){
    //不断更新数据
    let body = ''
    response.on('data',(data)=>{
        body += data
    })

    response.on('end',()=>{
        //数据接收完成
        console.log(body)
    })
}

let req = http.request(options,callback)
req.end()