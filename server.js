var acovmhttp = require('http');
acovmhttp.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('ArcherCraft VM Server 1.0.0.1 \n');
}).listen(1337, '127.0.0.1');
console.log('ArcherCraft VM Server running at http://127.0.0.1:1337/');
