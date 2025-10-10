const rawData = require('fs').readFileSync('./files/users.json', 'utf8');
const users = JSON.parse(rawData);
console.log(users.slice(0, 2));



