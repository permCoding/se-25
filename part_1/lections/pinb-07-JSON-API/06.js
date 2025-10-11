const puppeteer = require('puppeteer');
const fs = require('fs');

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

    // шаг 1: ищем блок "Завтра"
    await page.waitForSelector('.tab-content', { timeout: 5000 });
    // максимум 5 секунд ждём пока прогрузится искомый блок
    // но если он уже загрузился, то мы сразу переходим к следующему шагу
    const tomorrowBlocks = await page.$$('.tab-content'); // $$ найти все блоки

    let tomorrowTempBlock = null;
    for (const block of tomorrowBlocks) {
        const dayText = await page.evaluate(el => el.querySelector('.day')?.textContent.trim(), block);
        if (dayText === 'Завтра') {
            tomorrowTempBlock = block;
            break;
        }
    }

    if (!tomorrowTempBlock) {
        console.warn('Блок с датой "Завтра" не найден');
        await browser.close();
        return;
    }

    // шаг 2: внутри блока ищем температуру
    const tempValues = await page.evaluate(el => {
        const values = Array.from(el.querySelectorAll('temperature-value'));
        return values.map(val => val.textContent.trim());
    }, tomorrowTempBlock);

    console.log('Температура завтра:');
    console.log(`Ночью: ${tempValues[0]}`);
    console.log(`Днём: ${tempValues[1]}`);

    await browser.close();
})();

/*
    log → информация
    warn → предупреждение
    error → критическая ошибка

    для логирования в консоль в продакшене
    можно использовать: winston или log4js 
    вместо console
*/