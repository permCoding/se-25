// наследование (inheritance) как расширение
// перегрузка конструктора, функция super

const log = console.log;

class Human {
    #name;  // используем приватное поле

    constructor(name) {
        this.#name = name?.trim() || ''; // опциональная цепочка
    }

    set name(value) { // свойство name
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this.#name = value.trim();
    }

    get name() {
        return this.#name;
    }

    toString() {
        return `Human: ${this.name}`;
    }
}

class Student extends Human { // расширение класса
    #group;

    constructor(fullName, group='ПИб-11') { // есть параметр по умолчанию
        // Форматируем имя перед передачей в родительский конструктор
        const formattedName = Student.formatName(fullName);
        // const formattedName = this.formatName(fullName); // this => Student а не на объект
        super(formattedName);
        this.#group = group;
    }
    
    static formatName(fullName) { // статический метод для форматирования имени
        if (!fullName || typeof fullName !== 'string') return '';
        
        const parts = fullName.trim().split(' ');
        if (parts.length === 1) return parts[0];
        
        return `${parts[0]} ${parts[1][0]}.`; // Имя + первая буква фамилии с точкой
    }

    set group(value) { // немного валидации
        if (typeof value !== 'string') {
            throw new TypeError('Group must be a string');
        }
        this.#group = value.trim();
    }

    get group() {
        return this.#group;
    }
    
    getGroupInfo() {
        return `Учебная группа: ${this.group}`;
    }

    toString() {
        return `Student: ${this.name}, группа: ${this.group}`;
    }
}


const student1 = new Student('Косолапов Петя'); // группа по умолчанию

log(student1.toString());     // Student: Косолапов П., группа: ПИб-11
log(student1.getGroupInfo()); // Учебная группа: ПИб-11

const student2 = new Student('Иванов Иван', 'ПИб-31');
log(student2.name, student2.group); // Иванов И. ПИб-31

student2.group = ' ПИб-41 ';        // меняем через свойство
log(student2.group);                // ПИб-41
