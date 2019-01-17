var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Testing Message\n');
}).listen(8080, '10.133.68.95');
console.log('Server running at http://10.133.68.95:8080/');
