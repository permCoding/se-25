const request = require('sync-request');
const log = console.log;

const getHTML = (url) => {
    try {
        let content = request('GET', url).getBody('utf8');
        return content;
    } catch (error) {
        return '';
    }
}

const url = 'https://www.gismeteo.ru/weather-perm-4476/now/';
let html = getHTML(url)
// log(html);
require('fs').writeFileSync('./files/gismeteo.html', html, 'utf8');

// но тег <div class="now-weather"> будет пустым
// так как тут динамическое заполнение статического HTML-шаблона
/*
<div class="now-weather">
    <temperature-value value="6" from-unit="c" reactive="">+6</temperature-value>
</div>
*/