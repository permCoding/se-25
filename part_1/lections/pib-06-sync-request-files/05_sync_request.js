const fs = require('fs');

const filename = './files/content.txt';

const content = fs.readFileSync(filename, 'utf8');

console.log(content.split('\n').length);
