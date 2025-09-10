/* на вход в программу подаются строки
в каждой строке одно натуральное число
найти максимальное нечётное число */

const fs = require('fs');

console.log('start');

fs.readFile('./files/01.txt', 'utf8', (err, data) => {
    if (err) throw err;
    
    const result = data
        .split('\n')
        .map(x => +x)
        .filter(x => x%2 != 0)
        .reduce((acc, cur) => acc>cur? acc:cur, 0);

    console.log(result);
});

console.log('finish');

/*
start
finish
55
*/