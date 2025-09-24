const express = require('express');
const readCSV = require('./moduleReadData').readDataCsv;
const { HOST, PORT, dirFiles, sep } = require('./env.json');

const app = express();
app.use(express.static('public'));

app.get('/:type/:filename', (req, res) => {
    const { type, filename } = req.params;
    try {
        const path = `${dirFiles}${filename}`
        const content = readCSV(path).map(String).join(sep[type]);
        res.type(`text/${type}`);
        res.charset = 'utf-8';
        res.send(content);
    } catch (error) {
        res.status(500).send('Ошибка обработки файла');
    }
});

app.listen(PORT, () => console.log(`http://${HOST}:${PORT}/`));


/*
Перепишем код на express - что будет:
 - добавим выбор возвращаемого контента /:type - html, text (json)
 - упростим парсинг маршрута /:filename - для обработки запросов
 - упростим обработку ответов - res.send() и res.type()
 - добавим обработку ошибок при чтении файлов try { } catch (err)
 - обработаем запросы к favicon.ico
 - вынесем настройки в отдельный файл env.json
 - добавим папку public
*/