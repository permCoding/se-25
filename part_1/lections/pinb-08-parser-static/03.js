const cheerio = require('cheerio');

const html = `
    <table>
        <tbody>
            <tr>
                <td>1</td>
                <td>Python</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Java</td>
            </tr>
        </tbody>
    </table>`;

const $ = cheerio.load(html);

const tds = $('tr td'); // найти все td внутри всех tr
// const tds = $('tr:first > td'); // найти все td внутри первого tr

console.log(
    $(tds)
        .map((_, td) => $(td).text().trim())
        .get()
        .join('\n')
);
