const puppeteer = require('puppeteer'); // npm i puppeteer
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const params = {
    headless: true,
    args: [`--user-agent=${userAgent}`]
};
const url = 'https://www.gismeteo.ru/weather-perm-4476/now/';

(async () => {
    const browser = await puppeteer.launch(params);
    const page = await browser.newPage();
    
    await page.goto(url, { waitUntil: 'networkidle2' });

    await page.waitForSelector('temperature-value', { timeout: 3000 });

    const tempData = await page.evaluate(() => {
        const date = document.querySelector('.now-localdate');
        const title = document.querySelector('.page-title');
        const temp = document.querySelector('temperature-value');
        return { 
            date: date ? date.textContent.trim() : null,
            title: title ? title.textContent.trim() : null,
            temp: temp ? temp.textContent.trim() : null
        }
    });

    console.log(tempData);

    await browser.close();
})();

/*
<div class="page-title">Погода в Перми сейчас

<div class="now-localdate" data-pattern="D, j F, G:i">сб, 11 октября, 12:02</div>

<div class="now-weather">
    <temperature-value value="6" from-unit="c" reactive="">+6</temperature-value>
</div>
*/
