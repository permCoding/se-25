const http = require('http');
const [HOST, PORT] = ['localhost', 3000];

const server = http
    .createServer((req, resp) => {
        resp.writeHead(200, { 'Content-Type': 'text/plain' });
        resp.write('server\n');
        resp.write(req.url);
        resp.end();
    });

server
    .listen(3000, () => console.log(`http://${HOST}:${PORT}/`));