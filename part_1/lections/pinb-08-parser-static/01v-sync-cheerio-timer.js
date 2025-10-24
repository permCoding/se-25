const request = require('sync-request');
const cheerio = require('cheerio'); // npm i cheerio


const url = 'https://pogoda.mail.ru/prognoz/perm/24hours/';

let start = new Date().getTime();
const html = request('GET', url).getBody('utf8');
console.log(new Date().getTime() - start, 'ms'); // время загрузки страницы

start = new Date().getTime();
const $ = cheerio.load(html);

const temperature = $('.p-forecast__temperature-value').first().text().trim();
const description = $('.p-forecast__description').first().text().trim();

console.log(new Date().getTime() - start, 'ms'); // время парсинга страницы
    
console.log('Температура:', temperature); // Температура: +1°
console.log('Описание:', description); // Описание: облачно
