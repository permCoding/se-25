// приватное

const log = console.log;

class Student {
    #name = ''; // приватное поле
    constructor(line) {
        this.#name = line;
    }    
    set_name(line) { // публичный метод
        this.#name = line.trim();
    }
    get_name() { // публичный метод
        return this.#name;
    }
}

console.clear();

let stud = new Student('Петрович');
log(stud); // приватные поля не видны
log(stud.get_name());

// stud.#name = ' Петро '; // так не работает - private
stud.set_name(' Петро ');
log(stud);
log(stud.get_name());
