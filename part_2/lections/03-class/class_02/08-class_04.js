// создание объектов через декларацию класса

const log = console.log;

class Student {
    #age = ''; // приватное поле без свойства
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    valueOf() { return this.#age };
    toString() { return`name: ${this.name}, age: ${this.#age}` };
}

let students =  [
    new Student('Петров', 21),
    new Student('Сидоров', 19),
    new Student('Иванов', 22),
    new Student('Иванов', 18)
];

students.forEach((st, i) => log(i, st));
students.forEach((st, i) => log(i, String(st)));    // переопределили метод
students.forEach((st, i) => log(i, st.toString())); // переопределили метод
// если не переопределить в объекте, то [object Object]

log(students[0] > students[1]? 'старше': 'младше'); // переопределили valueOf
log(students[1] > students[2]? 'старше': 'младше');
log(students[2] > students[3]? 'старше': 'младше');

students
    .toSorted((a, b) => a.age - b.age) // НЕ работает, поля приватные
    .forEach(st => log(st.toString()));

students // даже по приватным полям можно сортировать
    .toSorted((a, b) => a - b) // сравнение по значению .valueOf()
    .forEach(st => log(st.toString()));
