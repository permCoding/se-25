console.log(Error.stackTraceLimit, 'kb');

/*
- по умолчанию размер стека 1 kB
- как задать свой размер стека:
node --stack-size=xxx script.js
- xxx - в килобайтах, например для 1 kB:
node --stack-size=1024 script.js
*/

function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

// console.log(fib(10));
// console.log(fib(100)); // тут нужно добавить кэширование

let count = 0;
function rec(n) {
    if (++count%100===0) { console.log(count); } // 9500
    rec();
}

rec();
 // 10240 = 10 kB - это по умолчанию
console.log(10 * 2**10);
// node --stack-size=1024 rec01.js
// node --stack-size=512 rec01.js