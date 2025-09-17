const { readFileSync, writeFileSync } = require('fs');
const { toDec } = require('./utils_old');
const titles = ['name', 'decimal'];

const lines = readFileSync('./files/data.csv', 'utf-8')
    .split(/\n|\r\n/)
    .filter(line => line)
    .slice(1,)
    .map(line => line.split(' '))
    .map(arr => `${arr[0]} ${toDec(arr[2], +arr[1])}`);

writeFileSync(
    './files/data_new.csv', 
    [titles.join(' '), ...lines].join('\n')
);
