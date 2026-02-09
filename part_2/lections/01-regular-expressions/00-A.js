const log = console.log;

const ex_00 = () => {
    let str = "qwerty 12   34 56 qwerty";

    let reg1 = /./;
    log(1, str.match(reg1));

    let reg2 = /./g;
    log(2, str.matchAll(reg2));  // итератор   
    
    log(2, str.matchAll(reg2).next());
    log(2, str.matchAll(reg2).next().value);
    log(2, str.matchAll(reg2).next().value[0]);

    for (let m of str.matchAll(reg2)) {
        log(2, m[0]);
    }

    let reg3 = /[0-9]{1,}/g;
    log(3, [...str.matchAll(reg3)].map(e => e[0]));

    let reg4 = /[0-9]+/;  // найти первое совпадение
    log(4, str.match(reg4)[0]);

    // let reg5 = /[0-9]+/g;
    let reg5 = /\d+/g;  // найти все совпадения
    log(5, ...str.match(reg5));
};

ex_00();
