const syncRequest = require('sync-request');
const fs = require('fs');

const getAndSaveJSON = (url, filename) => {
    try {
        const response = syncRequest('GET', url);
        
        if (response.statusCode !== 200) {
            throw new Error(`Ошибка HTTP: ${response.statusCode}`);
        }
        
        const content = response.getBody('utf8');
        
        const jsonArray = JSON.parse(content); 
        if (jsonArray.length > 0) {
            fs.writeFileSync(filename, content, 'utf8');
        }
        return jsonArray;
    } catch (error) {
        console.error('Ошибка:', error.message);
        return [];
    }
}


const obects = getAndSaveJSON(
    'http://pcoding-ru.1gb.ru/json/abiturs.json',
    './files/abiturs.json'
);

console.log(`Получено объектов: ${obects.length}`);

/*
Вывести на экран список абитуриентов, 
отсортировав их по двум критериям: 
  - по городам - по возрастанию, 
  - по рейтингу - по убыванию  
Данные тут: http://perm.1gb.ru/json/abiturs.json
*/