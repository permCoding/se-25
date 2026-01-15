// объекты можно создавать без декларации класса
// объекты в js ссылочного типа данных

const log = console.log;

let source = {
    name: 'Alex',
    age: 22,
    
    // toString: () => `name: ${this.name}, age: ${this.age}`, // анонимные не работают
    // toString: function() { return `name: ${this.name}, age: ${this.age}`},
    toString() { return `name: ${this.name}, age: ${this.age}`; },
    valueOf() { return this.age; }
};

let target = source; // объекты копируются по ссылке

source.age += 1;

const ex_01 = function () {
    log(source['age']);
    log(source.valueOf());
    
    log(`source => ${source.toString()}`);
    log(`target => ${target.toString()}`);    
}

const ex_02 = (id = 0) => {
    source.id = id; // поле в объект можно добавить "на лету" так
    log(source);
    log(target); // и оно будет доступно в "других" объектах
    
    target["avg"] = 4.2; // поле в объект можно добавить "на лету" и так тоже
    log(target);
    log(source); // и оно будет доступно в "других" объектах
    
    source.get_age = () => source.age; // можно добавить метод
    log(`age = ${target.get_age()}`); // и будет работать из другого объекта
}

console.clear();
// ex_01();
ex_02();
