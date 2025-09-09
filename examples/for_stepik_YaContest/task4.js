/* на вход в программу подается одна строка
на выход подайте развернутую строку */

console.log(
    require('fs')
        .readFileSync(0, 'utf8')
        .split('')
        .reverse()
        .join('')
);

/*
запуск программы из терминала: node name_program.js
вводим строки + Enter в конце каждой строки
конце ввода: Ctrl+D
*/