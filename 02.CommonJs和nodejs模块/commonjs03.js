const tools = require("./module/tools")
const request = require('./module/request')

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(tools.formatApi('Hello World'));
}).listen(8081);

console.log(request);
