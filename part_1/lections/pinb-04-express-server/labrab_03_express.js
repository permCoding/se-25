const request = require('sync-request') // npm i sync-request
const express = require('express'); // npm i express
const [ HOST, PORT ] = [ 'localhost', 5432];
const urls = [
    'http://pcoding-ru.1gb.ru/txt/labrab04-1.txt',
    'http://pcoding-ru.1gb.ru/txt/labrab04-2.txt',
    'http://pcoding-ru.1gb.ru/txt/labrab04-3.txt',
]

const get_lines_from_url = url => request("GET", url)
    .getBody("utf8")
    .split(/\r\n|\n/)
    .filter(line => line);

const app = express();
app.use(express.static('public'));

app.get('/:num', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=utf-8');
    try {
        let lines = get_lines_from_url(urls[req.params.num]);
        // тут ваше решение
        res.send(lines.join('\n'));
    } catch (error) {
        res.status(500).send('Ошибка обработки файла');
    }
});

app.listen(PORT, () => console.log(`http://${HOST}:${PORT}/`));

/*

https://www.npmjs.com/package/sync-request

http://pcoding-ru.1gb.ru/txt/labrab04-1.txt
http://pcoding-ru.1gb.ru/txt/labrab04-2.txt
http://pcoding-ru.1gb.ru/txt/labrab04-3.txt

http://pcoding-ru.1gb.ru/json/abiturs.json

*/