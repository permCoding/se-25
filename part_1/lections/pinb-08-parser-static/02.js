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

// найти tr внутри tbody и выбрать первый
const row = $('tbody > tr:first');
// const row = $('tbody > tr').first();

const result = row
    .find('td')
    .map((_, e) => $(e).text().trim())
    .get()
    .join(' ');

console.log(result); // Вывод: "1 Python"
