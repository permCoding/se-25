// клонирование объектов методом копирования всех свойств по отдельности

const log = console.log;

function ex_01() { // скопировать в пустой объект
    let source = { // объект источник
        name: 'Alex',
        age: 22,
        toString: function () {
            return `name: ${this.name}, age: ${this.age}`
        }
    };
    
    let target = Object.assign({}, source); // добавить все свойства в пустой объект

    source.age += 1;

    log(`1 source => ${source}`);
    
    // поля не поменялись !
    log(`1 target => ${target}`); // при интерполяции срабатывает .toString()
                               // НЕ вызывает toString, показывает структуру объекта
    log(2, target); // для сравнения { name: 'Alex', age: 22, toString: [Function: toString] }
    log(2, target.toString()); // для сравнения name: Alex, age: 22
    log(2, String(target));    // для сравнения name: Alex, age: 22
}


function ex_02() { // добавить в существующий объект
    let source = {
        name: 'Alex',
        age: 22
    };

    let obj = {id: 1};
    let target = Object.assign(obj, source); // добавить в существующий объект

    source.age += 1;
    
    log(`source => ${source}`);
    log(`target => ${target}`);
            // перебрать поля объекта
    for (let key in target) log(key, ":", target[key]);
    Object.keys(target).forEach(key => { log(target[key]) });

    log(JSON.stringify(target, null, 2));
    log(JSON.stringify(source, null, 2));
}


function ex_03() { // добавить несколько объектов
    let obj = {id: 1};
    let source = {name: 'Alex', data: { age: 22, weight: 78 }};
    let data = {"id": 666, group: 'ПИб-1', curator: 'Беляков'};

    let target = Object.assign(obj, source, data);

    source.data.age += 1;

    log(JSON.stringify(target, ['id', 'name','group'], 2));

    log(target);

    log(JSON.stringify(target, null, 2));
}


// console.clear(); // for Linux
// ex_01();
// ex_02();
ex_03();

/*
Правила преобразования объектов в строку:
- в строковой интерполяции `${obj}`  - вызывается toString()
- при конкатенации строк ("" + obj)  - вызывается toString()
- отдельный аргумент в console.log() - вызывается внутреннее представление объекта
*/