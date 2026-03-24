// можно самостоятельно повторить копирование по отдельности
// копируются и поля и методы

const log = console.log;

function copy_object(obj) { // копируем содержимое объекта
	let obj_new = {};

	// for (let key in obj) { // все параметры по отдельности в цикле скопируем
	// 	obj_new[key] = obj[key]; // присвоим в новый объект - поверхностно (для примитивов)
	// }

    Object
        .keys(obj)
        .forEach(key => obj_new[key] = obj[key]); // объекты присваивает по ссылке
    // можно написать рекурсивный метод копирования
    // добаться до глубины кождого НЕ примитива
    // и каждый примитив так скопировать
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

log(`source => ${source}`);
log(`target => ${target}`);

for (let key in target) { // проверим перебором
    log(`key: ${target[key]}`);
} // копируются и поля и методы
