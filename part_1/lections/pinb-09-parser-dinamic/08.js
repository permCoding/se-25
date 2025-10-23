const puppeteer = require('puppeteer');

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const params = { headless: true, args: [`--user-agent=${userAgent}`] };
const host = 'https://www.gismeteo.ru/';
const cities = {
    'Perm': 'weather-perm-4476/',
    'Kungur': 'weather-kungur-4492/',
    'Nemo': 'weather-Nemo-404/',
    'Ekaterinburg': 'weather-yekaterinburg-4517/'
};

// 🔄 Основная функция для получения погоды
const getWeatherForCity = async (browser, city, urlSuffix) => {
    const page = await browser.newPage();
    const url = host + urlSuffix;

    try {
        const response = await page.goto(url, { waitUntil: 'networkidle2' });
        if (response.ok()) {
            const blocks = await page.$$('.tab-content');
            for (let block of blocks) {
                const dayTitle = await block.evaluate(el => 
                    el.querySelector('.day')?.textContent.trim() || ''
                );

                if (dayTitle == 'Завтра') {
                    const temps = await block.evaluate(el => Array
                        .from(el.querySelectorAll('temperature-value'))
                        .map(val => val.textContent.trim())
                    );
                    console.log(`завтра в ${city} => ночью: ${temps[0]}; днём: ${temps[1]}`);
                    break;
                }
            }
        }
    } finally {
        await page.close();
    }
}

// 🚀 Основной запуск
(async () => {
    const browser = await puppeteer.launch(params);
    try {
        for (const [city, suffix] of Object.entries(cities)) {
            try {
                await getWeatherForCity(browser, city, suffix);    
            } catch (error) {
                console.error(`Ошибка при обработке города "${city}":`, error.message);
            }
        }
    } finally {
        await browser.close(); // Закрываем браузер
    }
})();
