const request = require('sync-request'); // npm i sync-request
const options = require('./options.json');

let prodFind = 'футболка'; // запрос на поиск товара
let prodFindEncoded = encodeURIComponent(prodFind); // корректного отображения в url

let url = `https://www.wildberries.ru/__internal/u-search/exactmatch/ru/common/v18/search?ab_testing=false&ab_testing=false&appType=1&curr=rub&dest=-1581744&hide_dtype=9;11&hide_vflags=4294967296&inheritFilters=false&lang=ru&page=1&query=${prodFindEncoded}&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false`;

const getProducts = (url) => JSON.parse( request("GET", url, options).getBody("utf8") );

let json = getProducts(url).products;
let strJSON = JSON.stringify(json, null, 2);
require('fs').writeFileSync('./products.json', strJSON, 'utf8');
