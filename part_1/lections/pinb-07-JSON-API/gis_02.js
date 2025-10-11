const puppeteer = require('puppeteer');

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const params = {
    headless: true,
    args: [`--user-agent=${userAgent}`]
};
const url = 'https://www.gismeteo.ru/weather-perm-4476/';

(async () => {
    const browser = await puppeteer.launch(params);
    const page = await browser.newPage();    
    await page.goto(url, { waitUntil: 'networkidle2' });

    const blocks = await page.$$('.tab-content');
    for (let block of blocks) {
        const dayTitle = await block
            .evaluate(el => el.querySelector('.day').textContent.trim());
        console.log(dayTitle);
    }

    await browser.close();
})();
