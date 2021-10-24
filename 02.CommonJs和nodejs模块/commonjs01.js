const http = require('http')

function formatApi(api){
    return "http://www.itying.com/"+api
}

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  var api = formatApi('api/plist')
  response.write(api)
  response.end();

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');