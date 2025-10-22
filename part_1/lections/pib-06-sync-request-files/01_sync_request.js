const syncRequest = require('sync-request');

const url = 'http://perm.1gb.ru/txt/labrab04-1.txt';

const response = syncRequest('GET', url);

console.log(response);
