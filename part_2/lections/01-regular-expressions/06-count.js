const log = console.log;

const ex_01 = () => { // подсчитать кол-во согласных
    const str = 'ABcDeFO!';
    // const str = 'AOIAO';

    const regex = /[BCDF-HJ-NP-TV-Z]/gi;
    const matches = str.match(regex);
    log(matches); // 'AOIAO' => null
    // const count = matches.length;
    const count = matches ? matches.length : 0;
    log(count); // 3
}

const ex_02 = () => { // подсчитать кол-во согласных
    const str = 'АбраКАДабрА!';

    const regex = /[БВГДЖЗКЛМНПРСТФЗХЦЧШЩ]/gi;
    const matches = str.match(regex);
    const count = matches ? matches.length : 0;
    log(count); // 3
}

const ex_03 = () => { // подсчитать кол-во чисел, которые могут быть двоичными
    const line = "10 AF 808 101 11 10000001 23F 1!";
    // const line = '234 FFF A0 70';

    const reB = /\b[01]+\b/g;
    log([...line.matchAll(reB)].length);
    log([...line.matchAll(reB).map(m => m[0])]);
    log([...line.matchAll(reB)]);
}

ex_01();
ex_02();
ex_03();
