const log = console.log;

const callback = (resolve, reject) => {
    setTimeout(() => {
        try {
            let num = Math.random();
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

ex_01()
    .then(value => log(value))
    .catch(error => log(error))
    .finally(() => log(`>> end of the test - ${i}`));
