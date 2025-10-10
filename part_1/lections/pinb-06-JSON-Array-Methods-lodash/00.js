const { readFileSync, writeFileSync } = require('fs');

const rawData = readFileSync('./files/users.json', 'utf8');
const users = JSON.parse(rawData);
console.log(users.slice(0, 2));


// require('./files/users.json')
//     .map(ab => {
//         return {
//             ...ab,
//             "rating": +ab.rating
//         }
//     })
//     .forEach(ab => console.log(ab));



let newUsers = require('./files/users.json')
    .map(ab => {
        return {
            ...ab,
            "rating": +ab.rating
        }
    });

// writeFileSync('./files/newUsers.json', String(newUsers), 'utf8');

// writeFileSync('./files/newUsers.json', JSON.stringify(newUsers), 'utf8');
// writeFileSync('./files/newUsers.json', JSON.stringify(newUsers, null, 2), 'utf8');
writeFileSync('./files/newUsers.json', JSON.stringify(newUsers, ['id', 'lastName'], 2), 'utf8');