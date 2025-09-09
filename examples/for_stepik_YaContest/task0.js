/* на вход в программу подаются строки
в каждой строке одно натуральное число
найти максимальное нечётное число */

const lines = require('fs').readFileSync(0, 'utf8').split('\n');
let nums = lines.map(Number).filter(x => x%2);
console.log(Math.max(...nums));

/*
запуск программы из терминала: node task0.js
вводим строки + Enter в конце каждой строки
конце ввода: Ctrl+D
*/