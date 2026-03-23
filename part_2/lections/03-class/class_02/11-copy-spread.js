// можно копировать с помощью оператора расширения
// копируются и поля и методы

const log = console.log;

let source = {
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name -> ${this.name}, age -> ${this.age}`
    }
} // исходный объект

let target = { 
    ...source, 
    email: "xxx@gmail.com"
}; // копируем поля объекта в цикле
 
source.age += 1;

log(`source => ${source.toString()}`);
log(`target => ${target.toString()}`);

for (let item in target) { // проверим перебором
    log(`${item}: ${target[item]}`);
} // копируются и поля и методы

for (let [key, value] of Object.entries(target)) { // проверим перебором
    log(`${key}: ${value}`);
} // копируются и поля и методы
