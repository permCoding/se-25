const request = require('sync-request'); // npm i sync-request

const getHTML = (url) => {
    try {
        let content = request('GET', url).getBody('utf8');
        return content;
    } catch (error) {
        return '';
    }
}

const getByIndexOf = (html) => {
    let strStart = '<span class="p-forecast__temperature-value">';
    let strFinish = '</span>';
    let posStart = html.indexOf(strStart, 0);
    let posFinish = html.indexOf(strFinish, posStart);

    console.log(posStart, posFinish);
    console.log(html.slice(posStart+strStart.length, posFinish));
    
    strStart = '<span class="p-forecast__description">';
    strFinish = '</span>';
    posStart = html.indexOf(strStart, posFinish);
    posFinish = html.indexOf(strFinish, posStart);

    console.log(posStart, posFinish);
    console.log(html.slice(posStart+strStart.length, posFinish));    
}

const getByRegExp = (html) => {
    // флаг s (dotAll) - точка . в регулярке может принимать и символ перевода строки \n
    const regex = /<span\s+class="p-forecast__temperature-value"\s*>(.*?)<\/span>/s;
    const match = html.match(regex); 
    if (match) {
        const temperature = match[1].trim().replace('&deg;','°');
        console.log('Температура:', temperature);
    }
}

const url = 'https://pogoda.mail.ru/prognoz/perm/24hours/';
let html = getHTML(url);
require('fs').writeFileSync('./files/pogoda.html', html, 'utf8');
// console.log(html);

// getByIndexOf(html);

// getByRegExp(html);


/*
<span class="p-forecast__temperature">
    <span class="icon icon_forecast p-forecast__temperature-icon" style="background-image: url(/img/status/icon/2021/dt/svg/03.svg)"></span>
    <span class="p-forecast__temperature-value">
        +1°
    </span>
    <span class="p-forecast__description">облачно</span>
</span>
*/