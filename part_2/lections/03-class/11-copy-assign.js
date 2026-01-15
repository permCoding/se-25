// клонирование объектов методом копирования всех свойств по отдельности

const log = console.log;

function ex_01() { // скопировать в пустой объект
    let source = {
        name: 'Alex',
        age: 22,
        toString: function () {
            return `name: ${this.name}, age: ${this.age}`
        }
    };
    
    let target = Object.assign({}, source); // назначить все свойства по отдельности в пустой объект

    source.age += 1;
    
    log(`source => ${source.toString()}`);
    log(`target => ${target.toString()}`);

    log(`source => ${source}`);
    log(`target => ${target}`); // при интерполяции приведение к строке отличается
    log(target); // для сравнения
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

    for (let item in target) { // перебрать поля объекта
        log(item, target[item]);
    }

    log(JSON.stringify(target));
    log(JSON.stringify(source));
}


function ex_03() { // добавить несколько объектов
    let obj = {id: 1};
    let source = {name: 'Alex', age: 22};
    let data = {group: 'ПИб-1', curator: 'Беляков'};

    let target = Object.assign(obj, source, data);

    // log(JSON.stringify(target, undefined, 4));
    log(JSON.stringify(target, ['id', 'name','group'], 4));
}


console.clear();
// ex_01();
// ex_02();
ex_03();
