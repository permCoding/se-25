// npm install lodash
// неглубокое клонирование - только для примитивов

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

console.clear();

let target = _.clone(source); // клонируем объект

source.id += 1_000_000; // это поле стало независимым
source.private.age = 50; // элементы поля типа объект остались зависимы
source.private.gender = false; // элементы поля типа объект остались зависимы

log('source =', JSON.stringify(source, null, 2));
log('target =', JSON.stringify(target, null, 2)); // тут тоже поменялось

// age: 22, => 50
// gender: true => false