var http = require('http');
const url = require('url')
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // 获取浏览器访问的地址
  if(request.url != '/favicon.ico'){
    var userinfo = url.parse(request.url,true).query
    console.log(userinfo);
  }

  response.end('Hello World');
}).listen(8081);

console.log('服务运行于： http://127.0.0.1:8081/');