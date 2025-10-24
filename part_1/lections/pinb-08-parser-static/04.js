const cheerio = require('cheerio');

const html = `
    <table class="special" id="first">
        <tbody>
            <tr name="last">
                <td>2</td>
                <td> - Java - </td>
            </tr>
        </tbody>
    </table>

    <table class="new-t special">
        <tbody>
            <tr>
                <td>1</td>
                <td>Python</td>
            </tr>
            <tr name="last">
                <td>2</td>
                <td>Java</td>
            </tr>
        </tbody>
    </table>`;

const $ = cheerio.load(html);

// найти таблицу по имени класса и все tr внутри tbody
// const rows = $('table.new-t > tbody > tr');
// const rows = $('table.new-t.special > tbody > tr');
const rows = $('table.special > tbody > tr');

// найти таблицу по id и все tr внутри tbody
// const rows = $('#first > tbody > tr');

rows.each((i, row) => {
    console.log(
        $(row)
            .find('td')
            .map((_, e) => $(e).text().trim())
            .get()
            .join(' ')
    );
});
