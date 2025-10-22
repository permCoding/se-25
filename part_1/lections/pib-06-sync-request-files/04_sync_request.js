const syncRequest = require('sync-request');
const fs = require('fs');

const url = 'http://perm.1gb.ru/txt/labrab04-1.txt';

const response = syncRequest('GET', url);

const content = response.getBody('utf8');

fs.writeFileSync('./files/content.txt', content, 'utf8');
