const { workerData, parentPort } = require('worker_threads')

const fib = (n) => {
    return n<2? n: fib(n-1)+fib(n-2)
}

console.log(workerData)
let result = fib(workerData.n)

parentPort.postMessage(result)

// запускается из worker_a_one.js ИЛИ worker_a_mane.js 
