const { Worker } = require('worker_threads')

const run_thread = (workerData) => {
    return new Promise((resolve, reject) => {
        let start = Date.now()
        const worker = new Worker('./worker.js', { workerData })
        worker.on('message', (data) => { 
            let finish = Date.now()
            console.log(finish-start)
            resolve(data)
        })
        // worker.on('message', resolve)
        worker.on('error', reject)
    })
}

const main = async () => {
    let start = Date.now()
    let n = 39
    const result = await Promise.all(
        [
            run_thread({n}), // 1.7
            run_thread({n}), // 1.7
            run_thread({n}), // 1.8
            run_thread({n}), // 2.0
            run_thread({'n': n}), // 2.4
            run_thread({n}), // 2.8
            run_thread({n}), // 3.3
            run_thread({n}), // 3.7
            run_thread({n}), // 4.2
            run_thread({'n': n}), // 4.5
            run_thread({n}), // 5.0
            run_thread({n}), // 5.3
            run_thread({n}), // 5.7
            run_thread({n}), // 6.3
        ]
    )
    let finish = Date.now()
    console.log(`result = ${result}`)
    console.log(`all time = ${finish-start} ms`)
}

console.clear()
console.log('many threads')
main().catch(console.error)