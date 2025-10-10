const rawData = require('fs')
    .readFileSync('./files/users.json', 'utf8');

const users = JSON
    .parse(rawData, (key, value) => key == 'rating'? +value: value);

console.log(users);
