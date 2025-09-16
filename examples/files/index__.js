const { readFile } = require('node:fs/promises');
// пространство имен node: обозначаем чтобы не было конфликтов
readFile(__filename, 'utf-8')
    .then((data) => {console.log(data)});
