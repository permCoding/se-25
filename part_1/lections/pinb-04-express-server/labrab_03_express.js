const express = require('express'); // npm i express
const get_lines = require('./utils').get_lines_from_url;
const [ HOST, PORT ] = [ 'localhost', 5432];
const urls = [
    'http://pcoding-ru.1gb.ru/txt/labrab04-1.txt',
    'http://pcoding-ru.1gb.ru/txt/labrab04-2.txt',
    'http://pcoding-ru.1gb.ru/txt/labrab04-3.txt',
    'http://pcoding-ru.1gb.ru/txt/labrab04-666.txt'
];

const app = express();
app.use(express.static('public'));

app.get('/:index', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=utf-8');
    try {
        let lines = get_lines(urls[req.params.index]);

        // тут ваше решение
        
        res.status(200).send(lines.join('\n'));
    } catch (error) {
        res.status(500).send('Ошибка обработки файла');
    }
});

app.get('/', (req, res) => res.send('app'));

app.listen(PORT, () => console.log(`http://${HOST}:${PORT}/`));

/*

https://www.npmjs.com/package/sync-request

http://pcoding-ru.1gb.ru/txt/labrab04-1.txt
http://pcoding-ru.1gb.ru/txt/labrab04-2.txt
http://pcoding-ru.1gb.ru/txt/labrab04-3.txt

*/