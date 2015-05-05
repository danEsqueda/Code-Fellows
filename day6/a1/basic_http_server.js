var http = require('http');
var url = require('url');

var d = new Date();


exports.start = function() {
  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    response.writeHead(200, {"Content-Type": "text/plain"});

    if (pathname === '/time') {
      response.write(d.toTimeString());
    } else if(pathname.split('/')[2]) {
      response.write(pathname.split('/')[2]);
    } else {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not found");
    }

    response.end();
  }).listen(8888);
}

