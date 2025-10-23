const puppeteer = require('puppeteer');

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const params = { headless: true, args: [`--user-agent=${userAgent}`] };
const url = 'https://www.gismeteo.ru/weather-perm-4476/';

(async () => {
    const browser = await puppeteer.launch(params);
    const page = await browser.newPage();    
    await page.goto(url, { waitUntil: 'networkidle2' });

    const blocks = await page.$$('.tab-content');
    for (let block of blocks) {
        const dayTitle = await block
            .evaluate(el => el.querySelector('.day').textContent.trim());
        
        if (dayTitle == 'Завтра') {
            // const temps = await page
            //     .evaluate(el => Array
            //         .from(el.querySelectorAll('temperature-value'))
            //         .map(val => val.textContent.trim()), block
            //     );

            const temps = await block
                .evaluate(el => Array
                    .from(el.querySelectorAll('temperature-value'))
                    .map(val => val.textContent.trim())
                );

            // const tags = await block.evaluate(el => Array.from(el.querySelectorAll('temperature-value')));
            // // console.log(tags);
            // const temps = tags.map(tag => tag.value);

            console.log(`завтра => ночью: ${temps[0]}; днём: ${temps[1]}`);
            break;
        }
    }
    
    await browser.close();
})();
