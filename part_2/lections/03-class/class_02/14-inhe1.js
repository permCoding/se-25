// наследование как расширение одного класса другим
// https://learn.javascript.ru/class-inheritance

const log = console.log;

class Human {
    constructor(name) {
        this._name = name; // приватное по соглашению
    }
    set name(line) { // свойство name
        this._name = line.trim(); // тут нужна валидация
    }
    get name() {
        return this._name.trim();
    }
}

class Student extends Human { // расширение класса (объекта)
    set group(line) { // свойство
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
log(student.name);  // свойство Косолапов Петя
log(student.group); // свойство Учебная группа: ПИб-31

log(JSON.stringify(student, null, 2));
/*
    {
    "_name": "Косолапов Петя",
    "_group": "ПИб-31"
    }
*/