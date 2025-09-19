const http = require('http');
const { getLines } = require('./utils_for_server');
const titles = ['name', 'decimal'];
const dirFiles = './files/';
const log = console.log;
const PORT = 3000;

const server = http
    .createServer((req, resp) => {
        resp.writeHead(200, { 'Content-Type': 'text/plain' });
        if (req.url === '/') {
            resp.end(
                [
                    'API:',
                    'toDec("1101", 2)',
                    'toDec("61", 8)'
                ].join('\n')
            );
        } else if (req.url.startsWith('/filename/')) {
            const filename = req.url.slice(10);
            const lines = getLines(dirFiles + filename);
            
            const pairs = lines
                .map(line => line.split(' '))
                .map(pair => [pair[0], +pair[1]]);
            const obj = Object.fromEntries(pairs);
            const json = JSON.stringify(obj, null, 4);
            log(json);
            resp.end(json);
        }
    });

server
    .listen(3000, () => log('http://localhost:3000/'));