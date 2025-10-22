const syncRequest = require('sync-request');


const getLinesFromUrl = (url) => {
    const response = syncRequest('GET', url);
    if (response.statusCode === 200) {
        try {
            return response.getBody('utf8').split('\n');
        } catch (error) {
            return [];
        }
    }    
}


const url = 'http://perm.1gb.ru/txt/labrab04-3.txt';
const lines = getLinesFromUrl(url);
console.log(lines);
