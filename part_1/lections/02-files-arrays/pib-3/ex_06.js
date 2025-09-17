const { toDec } = require('./utils_old');
const log = console.log;

const lines = require('fs')
    .readFileSync('./files/data.csv', 'utf-8')
    .split(/\n|\r\n/)
    .filter(line => line)
    .slice(1,);

lines
    .map(line => line.split(' '))
    .forEach(arr => log(arr[0], toDec(arr[2], +arr[1])));
