const syncRequest = require('sync-request');

const url = 'http://pcoding-ru.1gb.ru/csv/17.txt';

const response = syncRequest('GET', url);

if (response.statusCode === 200) {
    try {
        const content = response.getBody('utf8');
        console.log(content);
    } catch (error) {
        console.error('Ошибка чтения:', error.message);
    }
}

console.log(response);
