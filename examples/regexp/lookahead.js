// не захватывающий поиск впрерёд (вправо) - lookahead: x(?=y)
// находит x только если за ним следует y, но y не включается в результат

const log = console.log;

const ex_01 = () => { // найти числа, после которых есть знак валюты
    const str = 'Цена: 100 рублей, 200 долларов, 300, 555';
    const re = /\d+(?=\s*(рублей|долларов))/g;
    log(str.match(re)); // ['100', '200']
}

const ex_02 = () => { // найти слова, после которых идёт "кот"
    const str = 'черный кот, рыжий кот, собака, белый кот';
    const re = /[А-Яа-я]+(?=\s+кот)/g;
    log(str.match(re)); // ['черный', 'рыжий', 'белый']
}

const ex_03 = () => { // найти все вхождения "A", после которых есть ещё одна "A"
    const str = 'ABAAABAAA';
    const re = /A(?=A)/g;
    log([...str.matchAll(re)].map(m => ({
        match: m[0],
        index: m.index,
        nextChar: str[m.index + 1]
    })));
}
/*
    [
        { match: 'A', index: 2, nextChar: 'A' },
        { match: 'A', index: 3, nextChar: 'A' },
        { match: 'A', index: 6, nextChar: 'A' },
        { match: 'A', index: 7, nextChar: 'A' }
    ]
*/

ex_01();
ex_02();
ex_03();
