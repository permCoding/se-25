const log = console.log;

const callback = (resolve, reject) => {
    setTimeout(() => {
        let num = Math.random();
        try {
            if (num < .5) {
                log('>> resolve');
                resolve(`num = ${num.toFixed(3)}`);
            } else {
                log('>> reject');
                throw new Error('error number');
            }
        } catch (err) {
            reject(err);
        }
    });
}

const ex_01 = () => new Promise(callback);

let amount = 0;
let promises = [];
for (let i = 0; i < 10; i++) {
    promises.push(
        ex_01()
            .then(value => amount++)
            .catch(() => {})
            .finally(() => {
                log(value);
                log(`>> end of the test - ${i}`);
            })
    );
}
log(amount);

Promise.all(promises)
    .then(() => log(`all resolve`))
    .catch(() => log(`reject`))
    .finally(() => log(`Final amount: ${amount}`));
