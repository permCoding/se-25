// приватное

const log = console.log;

class Student {
    #name = ''; // приватное поле

    constructor(line) {
        this.#name = line; // тут нужна валидация
    }

    /**
     * @param {string} line
     */
    set name(line) { // публичный метод
        this.#name = line.trim();
    }

    get name() { // публичный метод
        return this.#name; // уже не нужен .trim(), 
                           // так как в #name только через setter
    }
}

console.clear();

let stud = new Student('Петрович');
log(stud); // приватные поля не видны
log(stud.name);

// stud.#name = ' Петро '; // так не работает - private
stud.name = '    Петро ';
log(stud);      // Student {} - приватные поля не видны
log(stud.name); // "Петро"

console.dir(stud, { showHidden: true }); // показать приватные поля
