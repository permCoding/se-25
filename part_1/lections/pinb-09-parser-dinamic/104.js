const puppeteer = require('puppeteer'); // npm i puppeteer
const fs = require('fs');
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const params = {
    headless: true,
    args: [`--user-agent=${userAgent}`]
};
const url = 'https://www.gismeteo.ru/weather-perm-4476/now/';

(async () => {
    const browser = await puppeteer.launch(params);
    const page = await browser.newPage();
    
    await page.goto(url, { waitUntil: 'networkidle2' }); // await ждём загрузки

    await page.waitForSelector('temperature-value', { timeout: 5000 }); // подождём чтобы прогрузилась страница

    const html = await page.content(); // получаем HTML после выполнения JS

    // fs.writeFileSync('./files/gismeteo.html', html, 'utf8'); // сохраняем HTML в файл

    const temperature = await page.evaluate(() => { // Парсим температуру
        const tempElement = document.querySelector('temperature-value');
        return tempElement ? tempElement.textContent.trim() : null;
    });

    console.log('Температура:', temperature);

    await browser.close();
})();

/*
<div class="page-title">Погода в Перми сейчас

<div class="now-weather">
    <temperature-value value="6" from-unit="c" reactive="">+6</temperature-value>
</div>
*/
