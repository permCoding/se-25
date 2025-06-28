const log = console.log;

const ex_A = () => {

    const delayedCallback = (callback, arg, delay=1000) => {
        
        callback('>> step - 1');

        setTimeout(() => {
            callback(`${delay.toString().padStart(5)} - данные после задержки (${arg})`);
        }, 1250);

        callback('>> step - 2');
    }

    delayedCallback(console.log, 'callback', 1250);
}

const ex_B = () => {

    const delayedCallback = (callback, arg, delay=1000) => {
        
        setTimeout(() => {
            callback('>> step - 1');
            callback(`${delay.toString().padStart(5)} - данные после задержки (${arg})`);
            callback('>> step - 2');
        }, 1250);

    }

    delayedCallback(console.log, 'callback', 1250);
}

const ex_C = () => {

    const delayedCallback = () => {
        setTimeout(() => log('step - 1'), 1500);
        setTimeout(() => log('step - 2'), 1250);
        setTimeout(() => log('step - 3'), 1000);
    }

    delayedCallback();
}

const ex_D = () => {

    const delayedCallback = (delay) => {
        delay(() => { 
            log('step - 1');
            delay(() => {
                log('step - 2');
                delay(() => { 
                    log('step - 3');
                }, 1000);
            }, 1250);
        }, 1500);
    }

    delayedCallback(setTimeout);
}

const ex_E = () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const delayedCallback = () => {
        delay(1500)
            .then(() => {
                log('step - 1');
                return delay(1250);
            })
            .then(() => {
                log('step - 2');
                return delay(1000);
            })
            .then(() => {
                log('step - 3');
            })
    };

    delayedCallback();
}

const ex_F = () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const delayedCallback = async () => {
        await delay(1500); log('step - 1');
        await delay(1250); log('step - 2');
        await delay(1000); log('step - 3');
    };

    delayedCallback();
}

const ex_G = () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const delayedCallback = async () => {
        for (let i = 1; i <= 5; i++) {
            await delay(500);
            log(`step - ${i}`);
        }
    };

    delayedCallback();
}

// ex_A();
// ex_B();
// ex_C();
// ex_D();
// ex_E();
// ex_F();
ex_G();
