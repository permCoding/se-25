const fs = require('fs');

const filename = './files/content.txt';

const content = fs.readFileSync(filename, 'utf8');

const lines = content.split('\n').filter(line => line.trim()); // line.length > 0
console.log(lines);
console.log(lines.length);
