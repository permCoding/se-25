// наследование как расширение одного класса другим
// https://learn.javascript.ru/class-inheritance

const log = console.log;

class Human {
    constructor(name) {
        this._name = name;
    }
    set name(line) { // свойство name
        this._name = line.trim();
    }
    get name() {
        return this._name.trim();
    }
}

class Student extends Human { // расширение класса
    set group(line) { // свойство name
        this._group = line.trim();
    }
    get group() {
        return "Учебная группа: " + this._group.trim();
    }
}


let student = new Student('Косолапов Петя');
log(student);

student.group = 'ПИб-31';
log(student);
log(student.name); // свойство
log(student.group); // свойство
