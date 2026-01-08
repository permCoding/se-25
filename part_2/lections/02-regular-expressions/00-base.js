const log = console.log;

const ex_00 = () => {
    let str = [
        'Кукуруза',
        'Кипарис',
        'Компас',
        'кактус',
        'крапива'
    ];

    let regex1 = /^[Кк].*[а]$/; // /i
    log(1, str.filter(elm => regex1.test(elm)));

    let regex2 = new RegExp('^[к].*[с]$', 'i');
    log(2, str.filter(elm => regex2.test(elm)));
}

const ex_01 = () => {
    let words = 'Кук кукуруза кокошник какао кактус Капитан караван';

    let regex1 = /к[аоу][крп]/gi;
    for (let m of words.match(regex1)) { log(m); }

    let regex2 = /\s[^\s]+\s/gi;
    for (let m of words.match(regex2)) { log(m); }
    // " кукуруза ""
    // " какао "
    // " Капитан "
    // забираются с пробелами

    let regex3 = /(?<=\s|^)[^\s]+(?=\s|$)/gi;
    for (let m of words.matchAll(regex3)) { log(m[0]); }
    // let matches = [...words.matchAll(regex2)].map(m => m[0]);
    // console.log(matches); // все слова

    log(words.split(/\s+/)); // все слова

    let regex4 = /\b\w+\b/gi; // границы слов
    for (let m of words.matchAll(regex4)) { 
        console.log(m[0]); 
    }
    // log([...words.match(regex4)]);

    // let words = 'Кук кукуруза кокошник какао кактус Капитан караван';
    // let regex4 = /\w+/gi;
    // for (let m of words.match(regex4)) { log(m); }
}

const ex_02 = () => {
    log(
        '89093344555'.replace(/([1-9])(\d{3})(.{0,})/, '$1-($2)-$3')
    );
}

const ex_03 = () => {
    let str = `
        В классе было 5 мальчиков и 7 девочек.
        В наличии были - 12 яблок, 10 бананов, 9 апельсинов.
        Температура на улице была -20.8 градуса.
        Средний возраст учеников - 15 лет.
        Средний рост учеников - 164.5 см.
        Средний вес яблока - .25 кг.
    `;

    let re1 = /\d/g;
    log(str.match(re1));

    let re2 = /[0-9]/g;
    log(str.match(re2));

    let re3 = /-?\d+/g; // -? - необязательный минус
    log(str.match(re3));
    // ? - это 0 или 1 раз
    // + - 1 или более раз
    // * - 0 или более раз

    let re4 = /-?\d*\.\d+/g;
    log(str.match(re4).map(parseFloat)); // только вещественные

    let re5 = /(?<!\.)\b-?\d+\b(?!\.)/g;
    log(str.match(re5).map(Number)); // только целые числа

    let re6 = /^\s*Средний.*$/gm;
    log(str.match(re6).map(x => x.trim()));
    // ^ — начало строки; $ — конец строки
    // g — флаг global - найти все совпадения
    // m — флаг multiline - чтобы ^ и $ работали на каждой строке, 
    //     а не только в начале и в конце всей строки
    log(str
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.startsWith('Средний'))
    );

    let re7 = /^\s*(Средний.*)$/gm;
    let matches = [...str.matchAll(re7)] // итератор в массив
        .map(m => m[1]); // m[1] — содержимое первой группы
    log(matches);
    
    matches = [];
    for (let m of str.matchAll(re7)) {
        matches.push(m[1]);
    }
    log(matches);
}

const ex_04 = () => {
    let now = new Date();
    let arr = [now.getFullYear(), now.getMonth()+1, now.getDate()];
    let inputDate = arr
        .map(el => String(el).padStart(2, '0'))
        .join('-');
    // let inputDate = "2026-02-19";
    console.log(inputDate);

    let regex = /^(\d{4})-(\d{2})-(\d{2})$/;
    let formatDate = inputDate.replace(regex, "$3.$2.$1");
    log(formatDate); // 19.02.2026
}


const ex_05 = () => {
    let str = "000 abc123DEF 999";

    let regex1 = /(abc)(\d+)(def)/i; // Захватывающие группы
    log([...str.match(regex1)]); 
    // ["abc123def", "abc", "123", "def"] - 4 элемента


    let regex2 = /(?:abc)(\d+)(?:def)/i; // С незахватывающими группами
    log([...str.match(regex2)]); 
    // ["abc123def", "123"] - только 2 элемента
}

const ex_06 = () => {
    let s = "9 abc 606 123 456 555 FFF BBB     1024";

    let regex3 = /(?:\s+)(\d+)(?:\s+)/gi;
    log([...s.match(regex3)]); 
    // ["606", "456"] - только 2 элемента

    let regex4 = /(?<=\s+)(\d+)(?<!\s+)/gi;
    log([...s.match(regex4)]); 
    // [ '606', '123', '456', '555', '1024' ] - нет первого числа


    // [ '9', '606', '123', '456', '555', '1024' ]
    // работающие варианты:

    let regex5 = /(?<=^|\s)(\d+)(?<![^\d])/gi;
    log([...s.match(regex5)]); 

    let regex6 = /(?<=^|\s)(\d+)(?<![^\w])/gi;
    log([...s.match(regex6)]); 

    let regex7 = /\b\d+\b/g;  // по границам слов обрезать
    log([...s.match(regex7)]); 

    let regex8 = /\b\w+\b/g;  // собрать все слова
    log([...s.match(regex8)]);
    // ['9','abc','606','123','456','555','FFF','BBB','1024']
}

ex_01();
ex_02();
ex_03();
ex_04();
ex_05();
ex_06();
