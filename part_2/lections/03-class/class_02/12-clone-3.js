// npm install lodash
// глубокое клонирование - _.cloneDeep(source) !!!

const _ = require('lodash');
const log = console.log;

let source = {
    id: 102,
    name: 'Alex',    
    private: {
        age: 22,
        gender: true
    }
};

let target = _.cloneDeep(source); // клонируем объект
// !!! либо написать свою рекурсивную функцию   !!!
// !!! для клонирования структурированных полей !!!
// в целях снижения объема используемой памяти и безопасности

source.id += 1; // все поля независимы
source.private.age = 50; // все поля независимы
source.private.gender = false; // все поля независимы

log('source =', JSON.stringify(source, null, 2));
log('target =', JSON.stringify(target, null, 2)); // независимы
