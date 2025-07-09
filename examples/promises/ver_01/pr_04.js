const log = console.log;

const check = (res) => {
    log(res.data);
}

const links = [
    'https://pcoding.ru/csv/17.txt',
    'https://pcoding.ru/csv/18.txt',
    'https://pcoding.ru/csv/19.txt',
    'https://pcoding.ru/csv/20.txt'
]

let amount = 0;
let ind = 1;
fetch(links[ind])
    .then(response => {
        if (!response.ok) throw new Error(`error: ${response.status}`);
        return response.text(); // .text() - асинхронна
    })
    .then(text => amount += text.split('\n').length)
    .catch(() => { log(`fail - ${ind}`) })
    .finally(() => log(amount)); // не для работы с данными
