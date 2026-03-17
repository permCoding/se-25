// ДЕЛЕГИРОВАНИЕ в объектах
// делегирование: если убрать что-то в дочернем
// оно будет разыскиваться в родительском объекте

const log = console.log;

const ex_01 = () => { // в объектах на основе Object.create()
    const Dog = { // это объект прототип
        to_speak: function() {
            return this.name + " говорит Гав-гав!";
        }
    };

    const myDog = Object.create(Dog); // новый объект с привязкой к прототипу

    myDog.name = "Мухтар"; // добавим
    myDog.to_speak = () => "говорение"; // заменим

    log(11, myDog.to_speak()); // проверим, работает - "говорение"

    delete myDog.to_speak; // удалим ссылку

    log(12, myDog.to_speak()); // Мухтар говорит Гав-гав! из родительского объекта
}

const ex_02 = () => { // в объектах на основе функций-конструкторов
    function Dog(name) { // функция-конструктор
        this.name = name;
    }
    
    Dog.prototype.to_speak = function() {
        return this.name + " говорит Гав-гав!";
    }; // методы добавляем в prototype функции-конструктора
    
    const myDog = new Dog("Мухтар"); // инстанцирование
    myDog.to_speak = () => "говорение"; // добавляем метод в дочерний
    log(21, myDog.to_speak()); // "говорение" в дочернем объекте
    
    Dog.prototype.to_speak = function() { // меняем в родительском прототипе
        return this.name + " говорит wow-wow! (из родительского)";
    };
    
    log(22, myDog.to_speak()); // "говорение" - свой метод
    
    delete myDog.to_speak;
    log(23, myDog.to_speak()); // "Мухтар говорит Гав-гав! (обновлено)" - ДЕЛЕГИРОВАНИЕ РАБОТАЕТ!
    
    log(24, myDog.prototype); // undefined
    // prototype — это свойство функций-конструкторов, а не созданных объектов
}

ex_01(); log();
ex_02();
