/* на вход в программу подается одна строка
на выход подайте развернутую строку */

const line = require('fs').readFileSync(0, 'utf8');
let result = line.split('').reverse().join('');
console.log(result);

/*
запуск программы из терминала: node name_program.js
вводим строки + Enter в конце каждой строки
конце ввода: Ctrl+D
*/