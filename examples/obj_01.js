/*
- valueOf() — встроенный метод всех примитивных обёрток - Number, String, Boolean, который возвращает исходное значение
- при выводе в консоль объект автоматически преобразуется в примитив, если не переопределён метод toString()
*/

Object.prototype.toString_ = function() { 
    const value = this.valueOf();
    return `${typeof value} <== ${value}`;
}

Object.prototype.toString = function() { 
    const value = this.valueOf();
    return `${typeof value} <-- ${value}`;
}

console.log(Object(1));
console.log(Object(1).valueOf());
console.log(Number(Object(1)));
console.log(Object(1).toString());
console.log(typeof Object(1).toString());
console.log(Object(1) === 1);

console.log();

console.log(Object(1).toString_()); // добавим метод
console.log(Object(1).toString()); // так вызовет существующий метод в Объекте
console.log( Object.prototype.toString.call(Object(1)) ); // вызвать для контекста

// = = = = = = = = = = 

console.log();

console.dir(Object(1));
console.log(Object.keys(Object(1))); // [] - нет собственных свойств
console.log(Object.getOwnPropertyNames(Object(1))); // Пример вывода: ['__proto__', 'constructor', 'toString', 'valueOf']

const obj = Object(1024)
obj.amountDig = function() { return this.toString().length; }
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(obj.amountDig());
