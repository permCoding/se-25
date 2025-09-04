const log = console.log;

// const links = [
//     'https://pcoding.ru/csv/17.txt',
//     'https://pcoding.ru/csv/18.txt',
//     'https://pcoding.ru/csv/19.txt',
//     'https://pcoding.ru/csv/20.txt'
// ];

const links = [
    'http://pcoding-ru.1gb.ru/csv/17.txt',
    'http://pcoding-ru.1gb.ru/csv/18.txt',
    'http://pcoding-ru.1gb.ru/csv/19.txt',
    'http://pcoding-ru.1gb.ru/csv/20.txt'
];

const delayedCallback = async () => {
    for (const [i, url] of links.entries()) {
        let res = await fetch(url);
        let txt = await res.text();
        log(`${i} - ${txt.split('\n').length} - ${url}`);
    } // так последовательность будет соблюдаться
};

delayedCallback(); // сколько строк в каждом из файлов
