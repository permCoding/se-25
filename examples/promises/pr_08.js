const ex_A = () => {

    const delayedCallback = (callback, arg, delay=1000) => {
        setTimeout(() => {
            callback(`${delay.toString().padStart(5)} - данные после задержки (${arg})`);
        }, 1250);
    }

    delayedCallback(console.log, 'callback', 1250);
}

const delayedPromise = (arg, delay=1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${delay.toString().padStart(5)} - данные после задержки (${arg})`);
        }, delay);
    });
}

const ex_B = () => {
    const prom = delayedPromise('Promise', 750); // он уже запустился на исполнение
    prom
        .then((result) => console.log(result)); // ждём окончания
}

const ex_C = () => {
    async function asyncExample() {
        const prom = delayedPromise('Promise - async/await'); // уже запустился
        const result = await prom; // тут ждём окончания
        console.log(result);
    }
      
    asyncExample();
}


ex_A();
ex_B();
ex_C();