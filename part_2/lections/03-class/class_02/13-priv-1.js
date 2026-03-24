// конструктор и акцессоры - сеттеры и геттеры
// защищённые поля и методы с префиксом _
// приватные, но по соглашению
// если есть только getter, то 
// поле доступно только для чтения

const log = console.log;

class Student {
    constructor(line) {
        this._name = line; // поле _name
    }
    set name(line) { // свойство name
        this._name = line.trim();
    }
    get name() {
        return this._name.trim();
    }
}

console.clear();

let stud = new Student('    Петрович ');
log(stud); // через конструктор { _name: '    Петрович ' }

stud.name = ' Петро ';
log(stud); // через свойство { _name: 'Петро' }

stud._name = ' Петро '; // лишние пробелы
log(stud); // через поле (public) { _name: ' Петро ' }

log(stud.name); // через свойство "Петро"

log(stud._name); // через поле    " Петро "
