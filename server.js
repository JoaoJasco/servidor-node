const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200; //significa OK solicitação do cliente bem sucedida;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});

server.listen(port, hostname, () => {console.log(`Servidor rodando em http://${hostname}:${port}/`)});