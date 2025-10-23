const request = require('sync-request');
const cheerio = require("cheerio"); // npm i cheerio
const fs = require('fs');


const url = 'https://www.tiobe.com/tiobe-index/';
const html = request('GET', url).getBody('utf8');

const $ = cheerio.load(html);

const results = [];

$('#top20 > tbody > tr')
    .each((_, row) => {
        const tds = $(row).find('td');
        const obj = {
            rankCur: $(tds[0]).text().trim(),
            rankOld: $(tds[1]).text().trim(),
            language: $(tds[4]).text().trim(),
            ratings: $(tds[5]).text().trim(),
            changeRating: $(tds[6])?.text().trim() || ''
        }
        results.push( obj );
    });

const json = JSON.stringify(results, null, 2);
// log(json);
fs.writeFileSync('./files/index-tiobe.json', json, 'utf8');

/*
$(undefined) - по умолчанию вернёт пустой объект
- далее метод .text() на пустом объекте возвращает '' - пустую строку
  > но использование оператора опциональной цепочки (optional chaining) ?.
  > делает код для всех интуитивно понятным и более безопасным
*/