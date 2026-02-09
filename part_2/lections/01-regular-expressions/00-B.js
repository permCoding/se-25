const log = console.log;

const ex_00 = () => {
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

    // вариант с String.raw``
    let ptn = String.raw`\s+`;
    let reg = new RegExp(ptn, 'g');
    log(9, words.split(reg)); // все слова даже если пробелы неодиночные
    
    // вариант БЕЗ String.raw``
    ptn = '\\s+'; // \\s - экран экрана
    reg = new RegExp(ptn, 'g');
    log(10, words.split(reg)); // все слова даже если пробелы неодиночные
}

const ex_task_01 = () => {
    // найти все подстроки - которые есть целые числа двузначные
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

const ex_02 = () => { // replace, нумерованные и именованные группы
    log(
        '89093344555'.replace(/([1-9])(\d{3})(.{0,})/, '$1-($2)-$3')
    );

    // применение групп для перестановки - форматирование даты
    // "2026-02-19" => "19.02.2026"
    let now = new Date();
    let arr = [now.getFullYear(), now.getMonth()+1, now.getDate()];
    let inputDate = arr
        .map(el => String(el).padStart(2, '0'))
        .join('-');
    // let inputDate = "2026-02-19";
    log(0, inputDate);

    let regex = /^(\d{4})-(\d{2})-(\d{2})$/;
    let formatDate = inputDate.replace(regex, "$3.$2.$1");
    log(1, formatDate); // 19.02.2026

    let re = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/;
    log(2, inputDate.replace(re, "$<day>.$<month>.$<year>")); // 19.02.2026
}

const ex_03 = () => { // жадность (по умолчанию) регулярок и применение АНТИжадности
    let str = "<div>первый</div> <div>второй</div>";

    // ЖАДНЫЙ квантификатор берёт ВСЁ до последнего </div>
    let greedy = /<div>.*<\/div>/;
    log(str.match(greedy)[0]); // <div>первый</div> <div>второй</div>
    
    let lazy = /<div>.*?<\/div>/; // НЕЖАДНЫЙ (ленивый) квантификатор
    log(str.match(lazy)[0]); // <div>первый</div> - только первый див

    // найти содержимое всех тегов span определённого класса
    let html = `
        <body>
            <pre>
                <code>
                    <span class="keyword">let</span> backGroundColor = '#fff';
                    <span class="keyword">const</span> fontSize = 14;
                    <span class="keyword">var</span> borderWidth = 1;
                    <span class="function">function</span> getColor() { return '#000'; }
                    console.log(backGroundColor);
                </code>
            </pre>
        </body>`;

    const regex = /<span class="keyword">([^<]*)<\/span>/g; // экранируем слеш
    log([...html.matchAll(regex)].map(m => m.index));
    log([...html.matchAll(regex)].map(m => m[0]));
    log([...html.matchAll(regex)].map(m => m[1]));
}

const ex_04 = () => {
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

// ex_00();
// ex_01();
// ex_task_01();
ex_02();
// ex_03();
// ex_04();
// ex_05();
// ex_06();
