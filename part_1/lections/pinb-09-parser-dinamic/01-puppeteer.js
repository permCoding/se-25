const puppeteer = require('puppeteer');
const fs = require('fs');

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const params = { headless: true, args: [`--user-agent=${userAgent}`] };
const url = 'https://www.gismeteo.ru/weather-perm-4476/';

(async () => {
    const browser = await puppeteer.launch(params);
    const page = await browser.newPage();    
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    const html = await page.content(); // получаем HTML после выполнения JS

    fs.writeFileSync('./files/weather-perm-puppeteer.html', html, 'utf8');

    await browser.close();
})();

const html = `
    <div class="tab-content">
        <div class="date date-Invalid Date">
            Сейчас
        </div>
        <div class="day" data-pattern="H:mm">
            21:07
        </div>
        <div class="tab-temp tab-charts">
            <div class="weather">
                <div class="weather-value" style="background-color: rgba(0, 242, 112, 0.25)">
                    <temperature-value value="5" from-unit="c" reactive="">
                        +5
                    </temperature-value>
                </div>
                <div class="weather-feel" style="background-color: rgba(0, 230, 167, 0.7)">
                    По ощущению&nbsp;
                    <temperature-value value="3" from-unit="c" reactive="">
                        +3
                    </temperature-value>
                </div>
            </div>
        </div>
    </div>`;
