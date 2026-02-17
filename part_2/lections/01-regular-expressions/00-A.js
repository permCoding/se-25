const log = console.log;

const ex_00 = () => {
    let re1 = /ab?/;
    let re2 = /ab{0,1}/;
    let re3 = /ab{3}/;
    let re4 = /ab+/;
    let re5 = /ab*/;
    let re6 = /a[^cdef]+/;

    [
        '',   'a',   'aa', 'aaa', 
        'ab', 'abb', 'abbb', 
        'bb', 'bbb', 'acc', 'aabb'
    ].forEach( 
        (elm, ind) => log( ind, '\t', re5.test(elm), '\t', elm ) 
    );
}

const ex_01 = () => {
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
// ex_01();
