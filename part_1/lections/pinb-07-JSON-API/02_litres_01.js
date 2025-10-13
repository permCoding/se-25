const request = require('sync-request'); // npm i sync-request
const options = require('./options.json');

const getProducts = (url) => {
    let data = request("GET", url, options).getBody("utf8");
    return JSON.parse(data);
}

let prodFind = 'Гегель'; // тут ваш запрос на поиск товара
let prodFindEncoded = encodeURIComponent(prodFind); // кодируем запрос для корректного отображения в url

let host = 'https://api.litres.ru/foundation/api/search';
let params = `is_for_pda=false&limit=12&offset=0&q=${prodFindEncoded}&show_unavailable=false&types=text_book`;
let url = `${host}?${params}`;
let json = getProducts(url).payload.data;

let strJSON = JSON.stringify(json, null, 2);
require('fs')
    .writeFileSync('./files/products.json', strJSON, 'utf8');

let hostWWW = 'https://www.litres.ru';
json.forEach(elm => console.log(`${hostWWW}${elm.instance.url}`));

/*

https://api.litres.ru/foundation/api/search?is_for_pda=false&limit=24&offset=0&q=%D0%B3%D0%B5%D0%B3%D0%B5%D0%BB%D1%8C&show_unavailable=false&types=text_book

https://www.litres.ru/audiobook/fridrih-gegel/gegel-vvedenie-v-istoriu-filosofii-lekcii-po-estetike-nauka-68048771/

"url": "/book/fridrih-gegel/fenomenologiya-duha-66483234/",

https://www.litres.ru/book/fridrih-gegel/fenomenologiya-duha-66483234/

https://www.litres.ru/book/fridrih-gegel/logika-43376205/
*/