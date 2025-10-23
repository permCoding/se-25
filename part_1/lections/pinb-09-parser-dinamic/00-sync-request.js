const request = require('sync-request');
const fs = require('fs');


const url = 'https://www.gismeteo.ru/weather-perm-4476/now/';
const html = request('GET', url).getBody('utf8');
fs.writeFileSync('./files/weather-perm.html', html, 'utf-8');
// при таком способе загрузки тег <temperature-value> будет пустой  
// так как содержимое подгружается асинхронно (JS, AJAX)  
// чтобы спарсить данные можно использовать puppeteer

const html_weather = `
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
    </div>`;
