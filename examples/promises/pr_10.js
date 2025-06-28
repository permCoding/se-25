const log = console.log;

const links = [
    'https://pcoding.ru/csv/17.txt',
    'https://pcoding.ru/csv/18.txt',
    'https://pcoding.ru/csv/19.txt',
    'https://pcoding.ru/csv/20.txt'
];

const delayedCallback = () => {
    links.forEach(async (url, i) => {
        let res = await fetch(url);
        let txt = await res.text();
        log(`${i} - ${txt.split('\n').length} - ${url}`);
    }); // так последовательность НЕ будет соблюдаться
};

delayedCallback();
