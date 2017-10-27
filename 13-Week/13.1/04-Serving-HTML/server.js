var http = require("http");
var fs = require("fs");
var PORT = 8080;
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses
function handleRequest(req, res) {

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {

    // We then respond to the client with the HTML page
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});


