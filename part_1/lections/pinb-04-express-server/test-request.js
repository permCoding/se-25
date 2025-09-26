const request = require('sync-request') // npm i sync-request

const get_lines_from_url = url => request("GET", url)
    .getBody("utf8")
    .split(/\r\n|\n/)
    .filter(line => line);

let url = 'http://pcoding-ru.1gb.ru/txt/labrab04-1.txt';
let lines = get_lines_from_url(url);
console.log(lines);
