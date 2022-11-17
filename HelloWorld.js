const http = require('http');
const server = http.createServer(function(request, respose){
    respose.writeHead(200, {'Content-Type':'text/html'});
    respose.write('<html><body><h1>Olá, Mundo</h1></body></html>');
    respose.end();
});
server.listen();
console.log('Servidor Node.js em execução');