// можно самостоятельно повторить копирование по отдельности
// копируются и поля и методы

const log = console.log;

function copy_object(obj) { // копируем содержимое объекта
	let obj_new = {};
	for (let key in obj) { // все параметры по отдельности в цикле скопируем
		obj_new[key] = obj[key];
	}
	return obj_new;
}

let source = {
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name -> ${this.name}, age -> ${this.age}`
    }
} // исходный объект

let target = copy_object(source); // копируем поля объекта в цикле
 
source.age += 1;

log(`source => ${source.toString()}`);
log(`target => ${target.toString()}`);

for (let item in target) { // проверим перебором
    log(`item: ${target[item]}`);
} // копируются и поля и методы
