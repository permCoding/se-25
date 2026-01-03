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
    log(str.filter(elm => regex1.test(elm)));

    let regex2 = new RegExp('^[к].*[с]$', 'i');
    log(str.filter(elm => regex2.test(elm)));
}


const ex_01 = () => {
    log(
        '89093344555'.replace(/([1-9])(\d{3})(.{0,})/, '$1-($2)-$3')
    );
}

const ex_02 = () => {
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

const ex_03 = () => {
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

ex_01();
