const log = console.log;

const check = (res) => {
    log(res.data);
}

// const links = [
//     'https://pcoding.ru/csv/17.txt',
//     'https://pcoding.ru/csv/18.txt',
//     'https://pcoding.ru/csv/19.txt',
//     'https://pcoding.ru/csv/20.txt'
// ]

// const links = require('fs').readFileSync('links.txt', 'utf-8').split('\n');
// const links = require('fs')
//     .readFileSync('links.txt', 'utf-8')
//     .split(/\r?\n/) // учитём разное оформление переносов
//     .filter(line => line.trim() !== ''); // только НЕ пустые строки
const links = require('fs')
    .readFileSync('links.txt', 'utf-8')
    .split(/\r?\n/) // учитём разное оформление переносов
    .filter(Boolean); // только НЕ пустые строки

// log(links);

let amount = 0;
let ind = 0; // для отладки - ссылка битая
// let ind = 2; // для отладки - ссылка битая
fetch(links[ind])
    .then(response => {
        if (!response.ok) throw new Error(`error: ${response.status}`);
        return response.text(); // .text() - асинхронна
    })
    .then(text => amount += text.split('\n').length)
    .catch(() => { log(`fail - ${ind}`) })
    .finally(() => log(amount)); // не для работы с данными
