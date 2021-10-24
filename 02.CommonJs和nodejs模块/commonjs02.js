const tools = require("./module/tools")

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(tools.formatApi('Hello World'));
}).listen(8081);
