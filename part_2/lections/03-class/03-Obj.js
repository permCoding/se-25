// создание объекта с помощью класса Object
const log = console.log;

let car = new Object();
log(1, car); // пустой объект

car.model = "Nissan Note";
car.color = "Gray";
car._year = 2012; // поле для которого назначим сеттер и геттер

Object.defineProperty(car, "Year", {
    set: function(value) {
        this._year = ((value>=1900) && (value<=2026))? value: 0;
    },
    get: function() {
        return this._year % 100;
    },
    // enumerable: false, // видимость при перечислении свойств
    enumerable: true, // видимость при перечислении свойств
    configurable: true // можно удалить, изменить 
    // delete car.Year;  // не сработает (тихо)
    // Object.defineProperty(car, "Year", { value: 2025 }); // error
});

// console.clear();
log(2, car);
car.Year = 2026; // доступ к полю через сеттер - Свойство
log(3, car);
log(4, `Year = ${car.Year}`); // 26
log(5, `_year = ${car._year}`); // 2026

for (let key in car) { log(key); } // enumerable: true
