const options = require('./options.json');

const getProducts = async (prodFind, numPage=1) => {
    let prodFindEncoded = encodeURIComponent(prodFind); // кодируем запрос для корректного отображения в url
    let host = 'https://u-search.wb.ru/exactmatch/ru/common/v18/search';
    let params = `ab_testing=false&ab_testing=false&appType=1&curr=rub&dest=12358357&hide_dtype=11&inheritFilters=false&lang=ru&page=${numPage}&query=${prodFindEncoded}&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false`;
    let url = `${host}?${params}`;
    let response = await fetch(url, options);
    if (!response.ok) { log(response.status); return }
    return await response.json();
}

const solver = async () => {
    let prodFind = 'нетбук'; // тут ваш запрос на поиск товара
    let products = await getProducts(prodFind);
    console.log(products);
}

solver();
