const log = console.log;

const ex_03 = () => { // жадность (по умолчанию) регулярок и применение АНТИжадности
    let str = "<div>первый</div> <div>второй</div>";

    // ЖАДНЫЙ квантификатор берёт ВСЁ до последнего </div>
    let greedy = /<div>.*<\/div>/;
    log(1, str.match(greedy)[0]); // <div>первый</div> <div>второй</div>
    // отмена жадности - символ `?`
    let lazy = /<div>.*?<\/div>/; // НЕЖАДНЫЙ (ленивый) квантификатор
    log(2, str.match(lazy)[0]); // <div>первый</div> - только первый див

    // можно просто использовать ОТРИЦАНИЕ в классе
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
    log(3, [...html.matchAll(regex)].map(m => m.index));
    log(4, [...html.matchAll(regex)].map(m => m[0]));
    log(5, [...html.matchAll(regex)].map(m => m[1]));
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

ex_03();
// ex_04();
// ex_06();
