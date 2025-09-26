const request = require('sync-request'); // npm i sync-request

const get_lines_from_url = url => request("GET", url)
    .getBody("utf8")
    .split(/\r\n|\n/)
    .filter(x => x);

let url = 'http://pcoding-ru.1gb.ru/txt/labrab04-1.txt';
// let url = 'https://www.tiobe.com/tiobe-index/';
let lines = get_lines_from_url(url);
console.log(lines);
