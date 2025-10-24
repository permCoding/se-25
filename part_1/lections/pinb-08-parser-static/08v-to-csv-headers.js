const request = require('sync-request');
const cheerio = require("cheerio"); // npm i cheerio
const fs = require('fs');

const url = 'https://www.tiobe.com/tiobe-index/';
const html = request('GET', url).getBody('utf8');

const $ = cheerio.load(html);

const headers = $('#top20 > thead > tr > th')
    .map((_, th) => $(th).text().trim())
    .filter((i, th) => [0,1,3,4,5].includes(i))
    .get(); // <th style="width: 25%" colspan="2">Programming Language</th>
console.log(headers);

const rows = [];
$('#top20 > tbody > tr').each((_, row) => {
    const tds = $(row).find('td');
    const rowData = tds
        .filter((i, e) => [0,1,4,5,6].includes(i))
        .map((_, e,) => $(e).text().trim().replace(/%/g,''))
        .get();
    rows.push(rowData);
});

const csvLines = [
        headers.join('\t'),
        ...rows.map(row => row.join('\t'))
    ].join('\n');
console.log(csvLines);
// fs.writeFileSync('./files/index-tiobe.csv', csvLines, 'utf8');
