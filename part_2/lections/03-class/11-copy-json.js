// клонирование объектов через строковое представление JSON
// JSON не хранит методы !!!

const log = console.log;

let source = { // инициализируем исходный объект
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name: ${this.name}, age: ${this.age}`
    }
}

for (let item in source) { // все поля и методы исходного объекта
    log(`item: ${source[item]}`);
}

let line = JSON.stringify(source); // объект в строку
log('line =', line);

let target = JSON.parse(line); // затем из строки собрать ДРУГОЙ объект
source.age += 1; // изменим значение поля в исходном объекте
log(target.age);

// проверим содержимое исходного объекта
log(`checking source => ${source.toString()}`); 
// есть все поля и метод toString работает

log(`checking target => ${target.toString()}`); // а тут метод toString пропал
log(`checking target => ${target}`); // и при интерполяции не работает
log('checking target =>', target); // работает нативный способ

for (let item in target) { // проверим перебором
    log(`item: ${target[item]}`);
}
