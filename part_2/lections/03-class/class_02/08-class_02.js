// создание объектов через декларацию класса

const log = console.log;

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    valueOf() { return this.age };
    toString() { return`=> name: ${this.name}, age: ${this.age}` };
} // так лучше - именнованная функция как метод

const st1 = new Student('Петров', 21);
const st2 = new Student('Петров', 19);

log(st1);         // сработает метод от Object
log(String(st1)); // сработает метод от Srudent
console.dir(st1);

log(st1.toString())

log(st1 > st2);
log(st2 > st1);
