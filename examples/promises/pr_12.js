const log = console.log;

const links = [
    'https://pcoding.ru/csv/17.txt',
    'https://pcoding.ru/csv/18.txt',
    'https://pcoding.ru/csv/19.txt',
    'https://pcoding.ru/csv/20.txt'
];

const delayedCallback = async () => {
    const results = await Promise.all(
        links.map(async (url, i) => {
            let res = await fetch(url);
            let txt = await res.text();
            return txt.split('\n').length;
        })
    );
    links // так последовательность будет соблюдаться
        .forEach((url, i) => log(`${url} - ${results[i]}`));
};

delayedCallback();
