// создание объектов через декларацию класса

const log = console.log;

class Student { // ES6 - 2022
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    valueOf = () => { 
        log('return this.age', this.age); // для контроля работы
        return this.age 
    };
    toString = () => `name: ${this.name}, age: ${this.age}`;
}   // стрелочный метод, как правило, НЕ пишется в прототип объекта 
    // созданного на основе класса - но это не точно ))
    // метод valueOf() - пишется, а toString() - НЕТ !

const st1 = new Student('Петров', 21);
const st2 = new Student('Петров', 19);

log(st1); // если нет иерархических структур и приватных полей
console.dir(st1); // то выводы совпадают
log('.toString()', st1.toString()); // только при явном обращении работает
log(`${st1}`); // при интерполяции сработает name: Петров, age: 21

log(st1 > st2);
log(st2 > st1);
