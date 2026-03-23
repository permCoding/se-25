const log = console.log;

// Шаг 1: Создаем объект-прототип
const dogPrototype = {
    to_speak: function() {
        return this.name + " говорит Гав-гав!";
    } // есть разные способы задания методов
};


// Шаг 2: Создаем новый объект, привязывая его к прототипу
const myDog = Object.create(dogPrototype);

myDog.name = "Мухтар"; // добавим
myDog.to_speak = () => "говорение"; // заменим

log(myDog.to_speak()); // говорение
log(dogPrototype.prototype);  // undefined

/* 
    но dogPrototype.prototype не существует
    так как это обычный объект
    не созданный через функцию конструктор
*/

log(dogPrototype.__proto__);


// = = = = теперь поменяем в прототипе

dogPrototype.prototype.to_speak = function() {
    if (this.name) { this.name === "Артемон"; }
    return this.name + " говорит Гав-гав!";
}

console.log(myDog.to_speak()); // говорение

delete myDog.to_speak; // удалим ссылку

console.log(myDog.to_speak()); // Мухтар говорит Гав-гав!

// делегирование: если убрать to_speak у myDog
// он найдется в родительском объекте
