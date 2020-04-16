//node.js路由
//我们需要的所有数据都会被包含在request对象中。，该对象作为request()回调函数的第一个参数传递
//为了解析这些数据，我们需要额外的Node.js模块，他们分别是url和querystring模块

var http = require('http')
var url  = require('url')
var router = require('./router')

function start(route){
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('请求的是：' + pathname);

        route(pathname)

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(3000)
    console.log('服务开启成功！')
}

start(router.route)

exports.start = start