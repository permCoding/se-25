const request = require('sync-request');
const cheerio = require("cheerio"); // npm i cheerio
const fs = require('fs');

const url = 'https://www.tiobe.com/tiobe-index/';
const html = request('GET', url).getBody('utf8');

const $ = cheerio.load(html);

const rows = [];
$('#top20 > tbody > tr').each((_, row) => {
    const tds = $(row).find('td');
    const rowData = tds
        .filter((i, e) => [0,1,4,5,6].includes(i))
        .map((_, e,) => $(e).text().trim().replace(/%/g,''))  // +0.13   %
        .get();
    rows.push(rowData);
});

console.log(rows[0]);

const csvLines = rows
    .map(row => row.join(','))
    .join('\n');

console.log(csvLines);

fs.writeFileSync('./files/index-tiobe.csv', csvLines, 'utf8');
