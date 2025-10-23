const cheerio = require('cheerio');

const html = `
    <table>
        <tbody>
            <tr>
                <td>1</td>
                <td>Python</td>
            </tr>
            <tr name"last">
                <td>2</td>
                <td>Java</td>
            </tr>
        </tbody>
    </table>`;

const $ = cheerio.load(html);

const rows = $('tbody tr'); // найти все tr внутри всех tbody

rows.each((i, row) => {
    console.log(
        $(row)
            .find('td')
            .map((_, e) => $(e).text().trim())
            .get()
            .join(' ')
    );
});
