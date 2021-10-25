const http = require('http');
const fs = require('fs');

// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
//     fs.readFile('./text.txt',(err,data)=>{
//         response.end(data)
//     })
// }).listen(8081);

// 用流的写法
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    const stream = fs.createReadStream('./text.txt')
    //  pipe获取来源流，并将其通过管道传输到目标流
    stream.pipe(response)
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');