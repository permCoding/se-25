const log = console.log;

const test_01 = () => {
    log(1);

    Promise
        .resolve()
        .then(() => log(2));

    log(3);
}

const test_02 = () => {
    log(1);

    setTimeout(() => { log(666), 0 });

    Promise
        .resolve()
        .then(() => log(2));

    log(3);
}

// test_01();
test_02();

/* - приоритеты обработки в Event Loop:
1) основной поток
2) очередь микрозадач - Promise
3) очередь макрозадач - setTimeout - callback

1
3
2
666

macrotask queue
microtask queue
*/
