// не захватывающий поиск назад (влево) - lookbehind: (?<=y)x
// находит x только если перед ним следует y, но y не включается в результат

const log = console.log;

const ex_01 = () => { // найти числа, перед которыми есть знак доллара
    const str = '$100, €200, 300₽, $400';
    const re = /(?<=\$)\d+/g;
    log(str.match(re)); // ['100', '400']
}

const ex_02 = () => { // найти слова, перед которыми идёт "кот"
    const str = 'кот сидит, кота гладят, кота кормят, собака лает, кот мяучет';
    const re = /(?<=кота?\s+)[А-Яа-я]+/g;  // "кот" или "кота"
    log(str.match(re)); // ['вижу', 'глажу', 'зову']
}

const ex_03 = () => { // найти все "A", перед которыми есть другая "A"
    const str = 'AABAAABAA';
    const re = /(?<=A)A/g;
    log([...str.matchAll(re)].map(m => ({
        match: m[0],
        index: m.index,
        prevChar: str[m.index - 1]
    })));
}
/*
    [
        { match: 'A', index: 1, prevChar: 'A' },
        { match: 'A', index: 4, prevChar: 'A' },
        { match: 'A', index: 5, prevChar: 'A' },
        { match: 'A', index: 8, prevChar: 'A' }
    ]
*/

ex_01();
ex_02();
ex_03();
