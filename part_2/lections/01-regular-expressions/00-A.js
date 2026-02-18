const log = console.log;

const ex_00 = () => { // в строке должно быть
    let re = /1861/;
    let str = 'Отмена крепостного права произошла в 1863 году';
    log( re.test(str) );
    
    re = /186[0-9]\s/;
    str = '... перебрался в столицу в 18652342 году';
    log( re.test(str) );

    re = /20[012][0-9]/;
    str = '... родилась 2029 году';
    log( re.test(str) );

    re = /20[012]\d/;
    str = '... родилась 2029 году';
    log( re.test(str) );

    re = /20([01]\d|2[0-6])/;
    str = '... родилась 2029 году';
    log( re.test(str) );
}

const ex_01 = () => { // квантификаторы
    let re1 = /ab?/;
    let re2 = /ab{0,1}/;
    let re3 = /ab{3}/;
    let re4 = /ab+/;
    let re5 = /ab*c/;
    let re6 = /a[^c-f]+/;

    [
        '',   'a',   'aa', 'aaa', 
        'ab', 'abb', 'abbb', '_abbbb', 
        'bb', 'bbb', 'acc', 'aabb', '_abc_', '_ac_',
        '## aavv ##', '## aaaa ##'
    ].forEach( 
        (elm, ind) => log( ind, '\t', re6.test(elm), '\t', elm ) 
    );
}

const ex_02 = () => { // экранирование
    let re1 = /\<1024\>/; // <1024>
    let re2 = /\"1024\"/;
    let re3 = /&lt;\s*1024\s*&rt;/; // &nbsp;
    
    log(
        [
            '<1024>', '1024',
            '"1024"', '&lt; 1024    &rt;' // < 1024    >
        ].map(elm => [re3.test(elm), elm])
    );

    let str = '1023 <800> 1025';
    let reg = /\<\s*(\d+)\s*\>/;
    let m = str.match(reg);
    if (m) {
        log(m[0]);
        log(m[1]);
    }

    str = '1023 < 111.15  > 1025';
    reg = /\<\s*((\d+)\.(\d+))\s*\>/; // .
    m = str.match(reg);
    if (m) { log(m[2], m[3], m[1]); }

    str = '1023 < 222,15  > 1025';
    reg = /\<\s*((\d+)[,.](\d+))\s*\>/; // .
    m = str.match(reg);
    if (m) { log(m[2], m[3], m[1]); }

    str = '1023 < 333 15  > 1025';
    reg = /\<\s*((\d+).(\d+))\s*\>/; // забыли экранировать точку
    m = str.match(reg);
    if (m) { log(m[2], m[3], m[1]); }
}

const ex_03 = () => { // match vs matchAll
    let str = "qwerty 12   34 56 qwerty";

    let reg1 = /./;
    log(1, str.match(reg1));

    let reg2 = /./g;
    log(2, str.matchAll(reg2));  // итератор   
    
    log(2, str.matchAll(reg2).next());
    log(2, str.matchAll(reg2).next().value);
    log(2, str.matchAll(reg2).next().value[0]); // 2 q

    for (let m of str.matchAll(reg2)) { log(2.1, m[0]); }

    let reg3 = /[0-9]{1,}/g;
    log(3, [...str.matchAll(reg3)].map(e => +e[0]));

    let reg4 = /[0-9]+/;  // найти первое совпадение
    log(4, str.match(reg4)[0]);

    // let reg5 = /[0-9]+/g;
    let reg5 = /\d+/g;  // найти все совпадения
    log(5, ...str.match(reg5));
}

const ex_04 = () => { // группы нумерованные и именованные
    str = '1023 <23.15> 1025 <606.909>';
    
    // считают по открывающей скобке
    let reg1 = /\<\s*((\d+)\.(\d+))\s*\>/g;
    log(1.1, str.match(reg1));
    for (let m of str.match(reg1)) {
        log(1.1, m);
    }
    log(1.2, [...str.matchAll(reg1)]);
    log(1.2, [...str.matchAll(reg1)].map(e => +e[2]));
    /*
        поле groups — только для именованных
        (?<число>\d+) для { groups: { число: '23' } }
    */

    let reg2 = /\<\s*((?<int>\d+)\.(?<flo>\d+))\s*\>/g;
    log(2);
    for (let m of str.matchAll(reg2)) {
        console.table(m.groups); // console.dir(m.groups);
    };
    for (let m of str.matchAll(reg2)) {
        log(m.groups.int, m.groups.flo);
        log(JSON.stringify(m.groups, null, 2));
    };
    log([...str.matchAll(reg2)].map(e => [+e.groups.int, +e.groups.flo]));
    /*
        Node.js показывает [Object: null prototype], чтобы 
        отличить его от обычных объектов {} с прототипом Object.prototype.
    */
};

// ex_00();
// ex_01();
// ex_02();
ex_03();
// ex_04();

/*
если число задано в формате с подчёркиваниями 888_123_345
напишите через регулярки - достать все разряды целого числа
*/