// создание объектов через декларацию класса

const log = console.log;

class Student {
    #age = ''; // приватное поле без свойства
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    valueOf() { 
        return this.#age 
    };
    toString() { 
        return`name: ${this.name}, age: ${this.age}` 
    };
    field = () => {
        
    }
}

const st1 = new Student('Петров', 21);
const st2 = new Student('Петров', 19);

log(st1);
console.dir(st1);
log(st1 > st2); // с приватными тоже работает
log(st2 > st1);

const prototype = Object.getPrototypeOf(st1);
log('Свойства:', Object.getOwnPropertyNames(prototype)); // свойства прототипа
// Свойства: [ 'constructor', 'valueOf', 'toString' ] - без стрелочного field