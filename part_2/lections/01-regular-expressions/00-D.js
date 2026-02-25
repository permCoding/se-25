const log = console.log;

const ex_00 = () => { // привязка к границам строки
    let str = [
        'Кукуруза',
        'Кипарис',
        'Компас',
        'кактус',
        'крапива',
        'КА'
    ];

    // let regex1 = /^[Кк].*[а]$/;
    // let regex1 = /^[к].*[а]$/i; // флаг i - игнор регистра
    let regex1 = /^к[А-Я]{1,}а$/i;
    log(1, str.filter(elm => regex1.test(elm)));

    let regex2 = new RegExp('^к.*с$', 'i');
    log(2, str.filter(elm => regex2.test(elm)));
}

const ex_01 = () => {
    let words = 'Кук кукуруза   кокошник какао кактус Капитан караван';

    let regex1 = /к[аоу][крп]/gi;
    for (let m of words.match(regex1)) { log(1, m); }

    let regex2 = /\s[^\s]+\s/gi; // пробел + не пробелЫ + пробел
    for (let m of words.match(regex2)) { log(2, m); }
    // "_кукуруза_"   "_какао_"   "_Капитан_"
    // слова забираются с пробелами и НЕ все

    // можно добавить группу для выбора без пробелов
    let regex3 = /\s([^\s]+)\s/gi;
    for (let m of words.matchAll(regex3)) { log(3, m[1]); }
    // "_кукуруза_"   "_какао_"   "_Капитан_"
    // теперь слова забираются БЕЗ пробелами, но опять НЕ все

    // можно пробелы не включать в перебор
    let regex4 = /(?<=\s|^)([^\s]+)(?=\s|$)/gi;
    for (let m of words.matchAll(regex4)) { log(4, m[1]); }
    // у исключённых групп нет номера

    // далее: и русские символы и латиница
    // с кириллицей вообще работает НЕнадёжно
    words = 'word Кук кок   какао char';
    
    let regex5 = /\b\w+\b/g; // границы слов \w - берёт только латиницу
    log(5, [...words.matchAll(regex5)].map(m => m[0])); // так сразу в массив
    // for (let m of words.matchAll(regex5)) { log(5, m[0]); }

    let regex6 = /[А-Яа-яЁё]+/g; // без игнора
    log(6, [...words.matchAll(regex6)].map(m => m[0]));

    let regex7 = /[\S]+/g; // без игнора
    log(7, [...words.matchAll(regex7)].map(m => m[0]));

    // можно просто сплитом - только в этой задаче
    log(8, words.split(/\s+/)); // все слова даже если пробелы неодиночные

    // вариант с String.raw`` - как пишешь так и будет в регулярке, автоэкранирование слеша
    let ptn = String.raw`\s+`;
    let reg = new RegExp(ptn, 'g');
    log(9, words.split(reg)); // все слова даже если пробелы неодиночные
    
    // вариант БЕЗ String.raw``
    ptn = '\\s+'; // \\s - экран экрана
    reg = new RegExp(ptn, 'g');
    log(10, words.split(reg)); // все слова даже если пробелы неодиночные
}

const ex_task_01 = () => { // найти все целые числа двузначные
    let str = '#FFF 10 01 000 234 22A33 23.45 123405';
    
    let reg1 = /\d{2}/g; // НЕ все находит - пропускает пересечения
    log(1, [...str.matchAll(reg1)].map(m => m[0]));

    let reg2 = /\d(?=\d)/g; // так находит все начала нужных строк
    log(2, [...str.matchAll(reg2)].map(m => m[0]));

    let reg3 = /\d(?=\d)/g; // можно вывести эти индексы
    log(3, [...str.matchAll(reg3)].map(m => m.index));

    let reg4 = /\d(?=\d)/g; // так все и даже 01
    log(4, [...str.matchAll(reg4)].map(m => str.substring(m.index, m.index+2)));

    let reg5 = /\d(?=\d)/g; // можно стартовый 0 отфильтровать потом
    log(5, [...str.matchAll(reg5)]
        .map(m => str.substring(m.index, m.index+2))
        .filter(x => !x.startsWith('0'))
    );

    let reg6 = /[1-9](?=\d)/g; // или сразу указать без первого 0
    log(6, [...str.matchAll(reg6)].map(m => str.substring(m.index, m.index+2)));
    // log(6, [...str.matchAll(reg6)].map(m => str.substr(m.index, 2))); // устаревший метод

    let reg7 = /(?=([1-9]\d))/g; // так все НОРМ
    log(7, [...str.matchAll(reg7)].map(m => str.substring(m.index, m.index+2)));
    log(7, [...str.matchAll(reg7)].map(m => +m[1]));
}

// ex_00();
// ex_01();

ex_task_01();
