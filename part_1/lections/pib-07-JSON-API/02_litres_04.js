const path = require('path');
const fs = require('fs');
const request = require('sync-request'); // npm i sync-request
const options = require('./options.json');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getProducts = (url) => {
    let data = request("GET", url, options).getBody("utf8");
    return JSON.parse(data);
}

const saveImg = (url, ind) => {
    let indBook = ind.toString().padStart(3, '0')
    const savePath = `./files/book_${indBook}.jpg`;
    let optionsImg = {
        headers: {
            'User-Agent': 'Mozilla/5.0' // без этого могут заблокировать
        },
        responseType: 'arraybuffer', // это для бинарных данных
        encoding: null // отключить автоматическое преобразование
    };
    let data = request("GET", url, optionsImg).getBody(); // без "utf8" - бинарные данные
    fs.writeFileSync(savePath, data);
}

/* метод forEach не работает с асинхронными функциями
const downloadImages = async (links, delay = 1200) => {
    links.forEach(async (link, ind) => {
        saveImg(link, ind);
        await sleep(delay); // пауза между запросами        
    });
}*/

// заменяем на цикл for 
const downloadImages = async (links, delay = 1200) => {
    for (let i = 0; i < links.length; i++) {
        saveImg(links[i], i);
        await sleep(delay); // можно убрать последнюю пазузу
    }
};

let prodFind = 'Гегель'; // тут ваш запрос на поиск товара
let prodFindEncoded = encodeURIComponent(prodFind); // кодируем запрос для корректного отображения в url

let limit = 5;
let host = 'https://api.litres.ru/foundation/api/search';
let params = `is_for_pda=false&limit=${limit}&offset=0&q=${prodFindEncoded}&show_unavailable=false&types=text_book`;
let url = `${host}?${params}`;
let json = getProducts(url).payload.data;

let hostWWW = 'https://www.litres.ru';
let imgLinks = json.map(elm => hostWWW+elm.instance.cover_url);
imgLinks.forEach(link => console.log(link));
downloadImages(imgLinks);
