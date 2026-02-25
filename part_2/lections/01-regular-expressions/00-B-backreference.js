const log = console.log;

const ex_00 = () => { // незахватывающие группы
    let str = "000 abc123DEF 999";

    let re1 = /(abc)(\d+)(def)/i; // Захватывающие группы
    log(0.1, [...str.match(re1)], str.match(re1)[2]); 
    // ["abc123def", "abc", "123", "def"] - 4 элемента


    let re2 = /(?:abc)(\d+)(?:def)/i; // С незахватывающими группами
    log(0.2, [...str.match(re2)], str.match(re2)[1]); 
    // ["abc123def", "123"] - только 2 элемента
}

const ex_01 = () => { // незахватывающие группы
    let str = `
        https://regex101.com/
        https://www.youtube.com
        http://api.github.com/   `;

    let re = /(?:https?|ftp):\/{2}(?:www\.)?([^\/.]+)(?:\.com)/g;
    log(1.1, [...str.matchAll(re)].map(m => m[1])); 
    // ["regex101", "youtube"]

    re = /(?:https?):\/{2}(?:www\.)?(.+)(?:\.com)/g;
    log(1.2, [...str.matchAll(re)].map(m => m[1])); 
    // ["regex101", "youtube", "api.github"]

    re = /(?:https?|ftp):\/{2}(?:www\.)?(.+)(?:\b)/g;
    log(1.3, [...str.matchAll(re)].map(m => m[1])); 
    // [ 'regex101.com', 'youtube.com', 'api.github.com' ]
}

const ex_02 = () => { // группы + обратные ссылка (backreference)
    // нумерация групп слева направо по порядку открывающих скобок (, 
    // игнорируя незахватывающие группы (?:...).
    let str = `2026 666 ASA 11 1024 1606 27072 1230321`;

    let re = /((\d{1})\d{1}\2)/g;
    log(2.1, [...str.matchAll(re)].map(m => m[1])); 
    // [ '202', '666', '606', '707', '303' ]

    re = /(?:\d)((\d)\d\2)(?:\d)/g;
    log(2.2, [...str.matchAll(re)].map(m => m[1])); 
    // [ '707', '303' ]

    re = /(?:\d)(([1-6])\d\2)(?:\d)/g;
    log(2.2, [...str.matchAll(re)].map(m => m[1])); 
    // [ '303' ]

    re = /((\d)(\d)\d\3\2)/g;
    log(2.3, [...str.matchAll(re)].map(m => m[1])); 
    // [ '27072', '23032' ]
}

const ex_03 = () => { // группы нумерованные и именованные
    str = '1023 <23.15> 1025 <606.909>';
    
    // считают по открывающей скобке
    let reg1 = /\<\s*((\d+)\.(\d+))\s*\>/g;
    log(3.1, str.match(reg1));
    for (let m of str.match(reg1)) {
        log(1.1, m);
    }
    log(3.2, [...str.matchAll(reg1)]);
    log(3.2, [...str.matchAll(reg1)].map(e => +e[2]));
    /*
        поле groups — только для именованных
        (?<число>\d+) для { groups: { число: '23' } }
    */

    let reg2 = /\<\s*((?<int>\d+)\.(?<flo>\d+))\s*\>/g;
    log(3.3);
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


const ex_04 = () => { // replace, нумерованные и именованные группы
    log(4.1, 
        '89093344555'.replace(/([1-9])(\d{3})(.{0,})/, '$1-($2)-$3')
    );

    // применение групп для перестановки - форматирование даты
    // "2026-02-19" => "19.02.2026"
    let now = new Date();
    let arr = [now.getFullYear(), now.getMonth()+1, now.getDate()];
    log(4.2, arr);
    let inputDate = arr
        .map(el => String(el).padStart(2, '0'))
        .join('-'); // "2026-02-19"
    log(4.2, inputDate);

    let reD = /^(\d{4})-(\d{2})-(\d{2})$/; // нумерованные
    let formatDate = inputDate.replace(reD, "$3.$2.$1");
    log(4.3, formatDate); // 19.02.2026

    reD = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/; // именованные
    formatDate = inputDate.replace(reD, "$<day>.$<month>.$<year>");
    log(4.4, formatDate); // 19.02.2026
}

ex_00();
ex_01();
ex_02();
ex_03();
ex_04();
