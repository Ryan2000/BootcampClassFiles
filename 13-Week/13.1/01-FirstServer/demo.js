var http = require('http');
var PORT = 8080;
var server = http.createServer(handleRequest);

var handleRequest = function(request, response) {
  response.end('Hey it worked on... ' + PORT);
}

server.listen(PORT, function(){
  console.log('Teh webz servers is workin ^_^');
});