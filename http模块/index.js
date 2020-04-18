//引入http模块
const http = require('http')

//返回server实例
let server = http.createServer()

//绑定request请求事件，执行回调函数
server.on('request',()=>{
    console.log("收到客户端的请求")
})

//绑定端口号，启动服务器
server.listen(3000,()=>{
    console.log("服务器启动成功，可以通过 http://127.0.0.1:3000 来进行访问")
})