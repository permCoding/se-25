const { readFileSync } = require('fs');

const s = readFileSync('./files/data.csv', 'utf-8');

console.log(s);