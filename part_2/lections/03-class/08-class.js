// создание объектов через декларацию класса

const log = console.log;

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    valueOf = () => this.age;
    toString = () => `name: ${this.name}, age: ${this.age}`;
}

let students =  [
    new Student('Петров', 21),
    new Student('Сидоров', 19),
    new Student('Иванов', 22)
];

students.forEach(st => log(st));
students.forEach(st => log(st.toString())); // переопределили метод

log(students[0] > students[1]? 'старше': 'младше');
log(students[1] > students[2]? 'старше': 'младше');

students.sort((a, b) => a.age - b.age);

students.forEach(st => log(st.toString()));
