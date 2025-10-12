const request = require('sync-request'); // npm i sync-request
const options = require('./options.json');

const getProducts = (url) => {
    let data = request("GET", url, options).getBody("utf8");
    return JSON.parse(data);
}

let numPage = 1; // в цикле можно сделать паджинацию - желательно с небольшой паузой
let prodFind = 'нетбук'; // тут ваш запрос на поиск товара
let prodFindEncoded = encodeURIComponent(prodFind); // кодируем запрос для корректного отображения в url

let host = 'https://u-search.wb.ru/exactmatch/ru/common/v18/search';
let params = `ab_testing=false&ab_testing=false&appType=1&curr=rub&dest=12358357&hide_dtype=11&inheritFilters=false&lang=ru&page=${numPage}&query=${prodFindEncoded}&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false`;
let url = `${host}?${params}`;
let json = getProducts(url);
let strJSON = JSON.stringify(json, null, 2);

require('fs')
    .writeFileSync('./files/products.json', strJSON, 'utf8');


// https://github.com/ForbesLindesay/sync-request

/* 

Собираем данные с сайта wb.ru
Задание на лабораторку:
    - по своему усмотрению определитесь с товаром, который будете искать на сайте
    - нужет такой товар, чтобы у него было более 100 продавцов 
    - так как требуется потренироваться собирать товар с нескольких разных страниц 
    - а на каждой странице WB по 100 товаров

Написать программу, которая реализует следующий функционал:
0) делает запрос на выборку товара `по убыванию цены`
1) пишет в консоль сколько всего есть товаров по вашему запросу
2) выбрает товары с первых трёх страниц
3) данные со всех страниц объединяет в один массив объектов
4) преобразовыват объекты в массиве так чтобы остались только обозначенные поля:
    бренд
    название товара
    количество оценок
    оценка поставщика
    ссылка на страницу товара
    цена текущая
    цена базовая
    характеристики (на ваш выбор 3-4 характеристики)
5) записать преобразованный массив объектов в файл products.json

В программе должна быть функция getProducts(numPage), которая получает данные по товару с ОДНОЙ страницы сайта.
Должна быть переменная, которая хранит номер страницы, которая будет меняться в цикле (numPage 1..3).
Должна быть переменная, которая хранит общее количество страниц для обработки, например, amountPages = 3.
Добавьте в программу обработку исключительных ситуаций...

Запрос к сайту не обязательно делать с помощью sync-request, можно использовать fetch или axios...

*/