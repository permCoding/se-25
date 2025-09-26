/* на вход в программу подаются строки
в каждой строке одно натуральное число
найти максимальное нечётное число */

console.log(require('fs')
    .readFileSync('./files/01.txt', 'utf8')
    .split(/\r\n|\n|\r/)
    .map(Number)
    .filter(x => x%2)
    .reduce((a,b) => ((b%2) && (b>a))? b: a, 0)
);
