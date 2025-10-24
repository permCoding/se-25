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


const getFirst = (html) => {
    const $ = cheerio.load(html);

    // найти tr внутри tbody и выбрать первый
    const row = $('tbody').find('tr:first');
    // const row = $('tbody').find('tr'); // все tr внутри tbody
    // const row = $('tbody > tr:first');
    // const row = $('tbody > tr').first();

    return row // это объект jQuery
        .find('td')
        .map((_, e) => $(e).text().trim())
        .get() // в массив
        .join(' ');
}

const getFirst_ = (html) => {
    const $ = cheerio.load(html);
    return $('tbody')
        .find('tr:first')
        .find('td')
        .map((_, e) => $(e).text().trim())
        .get()
        .join(' ');
}

const getByIndex = (html) => {
    const $ = cheerio.load(html);
    // все tr внутри tbody в массив и взять первый элемент
    const row = $('tbody').find('tr').get()[0];
    return $(row) // $(_) - преобразует HTML-строку в jQuery-объект
        .find('td')
        .map((_, e) => $(e).text().trim())
        .get()
        .join(' ');
}

const getByNext = (html) => {
    let $ = cheerio.load(html); // загрузим HTML
    const row = $('tbody').find('tr').get()[0];
    $ = cheerio.load(row); // загрузим другой HTML

    return $('td')
        .map((_, e) => $(e).text().trim())
        .get()
        .join(' ');
}

console.log(getFirst(html)); // Вывод: "1 Python"
console.log(getFirst_(html)); // Вывод: "1 Python"
console.log(getByIndex(html)); // Вывод: "1 Python"
console.log(getByNext(html)); // Вывод: "1 Python"
