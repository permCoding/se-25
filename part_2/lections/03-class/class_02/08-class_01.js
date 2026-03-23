// создание объектов через декларацию класса

const log = console.log;

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    valueOf = () => { log('return this.age'); return this.age };
    toString = () => `name: ${this.name}, age: ${this.age}`;
}   // стрелочный метод, как правило, НЕ пишется в прототип объекта 
    // созданного на основе класса - но это не точно ))
    // метод valueOf() - пишется, а toString() - НЕТ !

const st1 = new Student('Петров', 21);
const st2 = new Student('Петров', 19);

log(st1);
console.dir(st1);
log(st1 > st2);
log(st2 > st1);
