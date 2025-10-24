const request = require('sync-request');
const cheerio = require('cheerio'); // npm i cheerio

/*
  https://cheerio.js.org/docs/intro
  https://www.npmjs.com/package/cheerio
  https://vimeo.com/31950192

cheerio - загружает HTML как строку и возвращает объект 
          для извлечения данных с помощью встроенных методов

$('h2').text(); - получить текст из тега
$('a[href]')
    .map((i, el) => $(el).attr('href'))
    .get();     - получить массив всех ссылок на странице
*/

const url = 'https://pogoda.mail.ru/prognoz/perm/24hours/';

const html = request('GET', url).getBody('utf8');

const $ = cheerio.load(html);

// найти селектор по имени класса
const temperature = $('.p-forecast__temperature-value').first().text().trim();
const description = $('.p-forecast__description').first().text().trim();

console.log('Температура:', temperature); // Температура: +1°
console.log('Описание:', description); // Описание: облачно


/*
<span class="p-forecast__temperature">
    <span class="icon icon_forecast p-forecast__temperature-icon" style="background-image: url(/img/status/icon/2021/dt/svg/03.svg)"></span>
    <span class="p-forecast__temperature-value">
        +1°
    </span>
    <span class="p-forecast__description">облачно</span>
</span>
*/