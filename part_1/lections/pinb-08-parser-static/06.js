const request = require('sync-request');
const cheerio = require("cheerio"); // npm i cheerio
const log = console.log;


const url = 'https://www.tiobe.com/tiobe-index/';
const html = request('GET', url).getBody('utf8');

const $ = cheerio.load(html);

// $('#top20').find('tbody').find('tr')
// $('#top20 > tbody').find('tr')
$('#top20 > tbody > tr')
    .each((_, row) => {
        $(row)
            .find('td')
            .each((_,e) => log($(e).text().trim()));
    });


//   cheerio - приветствие
// https://cheerio.js.org/docs/category/tutorials---basics
//   To select elements with a specific class name:
// const $selected = $('.selected');
//   To select elements with a specific attribute value:
// const $selected = $('[data-selected=true]');
//   you can use spaces ( ) to select elements that are descendants of other elements. 
//   Найти потомков - пиши через пробел:
// const $p = $('div p');
//   Найти прямых непосредственных потомков - пиши через >:
// const $p = $('div > p');

/*
<table id="top20" class="table table-striped table-top20">
    <thead>
    <tr>
        <th style="width: 15%">Oct 2025</th>
        <th style="width: 15%">Oct 2024</th>
        <th title="Difference compared to last year" style="width: 15%">Change</th>
        <th style="width: 25%" colspan="2">Programming Language</th>
        <th style="width: 15%">Ratings</th>
        <th title="Difference compared to last year" style="width: 15%">Change</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td><td>1</td><td></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/Python.png" alt="Python page" style="vertical-align:middle"></td><td>Python</td><td>24.45%</td><td>+2.55%</td>
        </tr>
        <tr>
            <td>2</td><td>4</td><td><img src="/wp-content/themes/tiobe/tpci/images/up.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/C.png" alt="C page" style="vertical-align:middle"></td><td>C</td><td>9.29%</td><td>+0.91%</td>
        </tr>
        <tr>
            <td>3</td><td>2</td><td><img src="/wp-content/themes/tiobe/tpci/images/down.png" alt="change"></td><td class="td-top20"><img src="/wp-content/themes/tiobe/tiobe-index/images/C__.png" alt="C++ page" style="vertical-align:middle"></td><td>C++</td><td>8.84%</td><td>-2.77%</td>
        </tr>
    </tbody>
</table>
*/