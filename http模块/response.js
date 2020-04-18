//引入http模块
const http = require('http')

//返回server实例
let server = http.createServer()

//绑定request请求事件，执行回调函数,需要接受两个参数：
    //Request 请求对象 ：获取客户端的请求信息
    //Response响应对象 ：给客户端发送响应消息
server.on('request', (req,res) => {
    console.log("收到客户端的请求,请求路径是："+req.url)

    //response对象有一个方法：write  可以用来给客户端发送响应数据
    //write可以使用多次，但是最后一定要使用end()来结束响应，否则客户端会一直等待
    res.write("<h1>hello</h1>")
    res.end()
})

//绑定端口号，启动服务器
server.listen(3000, () => {
    console.log("服务器启动成功，可以通过 http://127.0.0.1:3000 来进行访问")
})