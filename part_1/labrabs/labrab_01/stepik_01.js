/*
как остановить ввод
Ctrl+D - for Linux
Ctrl+C - для Windows
*/

console.log(require('fs')
    .readFileSync(0, 'utf8')
    .split('\n')
    .filter( line => line.length > 0)
    .map(line => +line)
    .reduce((a,b) => a+b)
);

// console.log(
//     require('fs')
//         .readFileSync(0, 'utf8')
//         .split(' ')
//         .map(x => +x)
//         .filter(x => x%2 == 0)[0]
// )