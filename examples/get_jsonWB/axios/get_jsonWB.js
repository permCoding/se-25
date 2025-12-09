import axios from "axios";
import fs from "fs/promises";
import { readFile } from 'fs/promises';
const options = JSON.parse(await readFile('./options.json', 'utf-8'));

async function getProducts(page) { // page - страница поиска
    let prodFind = 'наушники'; // запрос на поиск товара
    let prodFindEncoded = encodeURIComponent(prodFind); // корректного отображения в url

    let host = `https://www.wildberries.ru/__internal/u-search/exactmatch/ru/common/v18/search`;
    let query = `ab_testing=false&ab_testing=false&appType=1&curr=rub&dest=-1581744&hide_dtype=9;11&hide_vflags=4294967296&inheritFilters=false&lang=ru&page=${page}&query=${prodFindEncoded}&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false`;
    let url = host + '?' + query;

    try {
        const res = await axios.get(url, options);
        const data = res.data; // console.log(data);
        // if (page === 1) {
            
        // }
        console.log("Всего найдено товаров:", data?.total);
        return data?.products || [];
    } catch (err) {
        console.log("Ошибка при загрузке страницы", page, err.message);
        return [];
    }
}

async function test_one_page(page) { // это для проверки загрузки одной страницы
    const products = await getProducts(page);
    console.log("Товаров на странице:", products.length);
    console.log(products[0].id, products[0].name);
}

async function main() {
    const pages = 3;
    let all = [];

    for (let page = 1; page <= pages; page++) {
        console.log("Загружается страница", page);
        const products = await getProducts(page);
        console.log("Товаров на странице:", products.length);
        console.log(page, products[0].id, products[0].name); // для контроля
        all = all.concat(products);
        await new Promise(r => setTimeout(r, 1500));
    }

    console.log("Всего собрано товаров:", all.length);

    const result = all.map(p => ({
        brand: p.brand,
        name: p.name,
        feedbacks: p.feedbacks,
        supplierRating: p.supplierRating,
        link: `https://www.wildberries.ru/catalog/${p.id}/detail.aspx`,
        price: (p.sizes?.[0]?.price?.product || 0) / 100,
        basePrice: (p.sizes?.[0]?.price?.basic || 0) / 100,
        characteristics: {
            color: p.colors?.[0]?.name || "нет данных",
            category: p.subjectName || "нет данных",
            quantity: p.totalQuantity || "нет данных",
            volume: p.volume || "нет данных"
        }
    }));

    try {
        await fs.writeFile("products.json", JSON.stringify(result, null, 2));
        console.log("Файл products.json сохранён");
    } catch (e) {
        console.log("Ошибка при записи файла:", e.message);
    }
}

// test_one_page(4);
main();
