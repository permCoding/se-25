const log = console.log;
// обязательно через традиционную функцию, у неё есть 
// this - ссылка на свой объект
// прототипирование через => function()
// сравнить print_01 и print_02


// log(global);
// log(globalThis);
globalThis.amount = 1_000; // добавим свойство в глобальный объект
// log(globalThis);
// log(global);

// = = = = = = 

Array.prototype.print_01 = function() {
    log('this =', this);
    return `print_01 => ${this.join(', ')}`;
} // this это ссылка на сам объект-массив

function proto_func() { 
    log('this =', this);
    return `print_01_ => ${this.join('; ')}`; 
}

Array.prototype.print_01_ = proto_func; // можно просто сослаться на функцию

// = = = = = = 

Array.prototype.print_02 = () => { return `02 => ${this.join(', ')}`; }

Array.prototype.print_02 = () => `02 => ${this.join(', ')}`;

// = = = = = = 

Array.prototype.print_03 = () => {
    log(this); // пустой объект
    // log(globalThis);
    return this === globalThis;
}

// = = = = = = этого достаточно
Array.prototype.print_04 = () => {
    log(globalThis.amount);
    log(global.amount);
    log(module.exports.amount);
    return this.amount; // не ссылается на globalThis
}

Array.prototype.print_05 = () => {
    this.amount = globalThis.amount;
    this.amount++;
    log(this);
    return this.amount;
}

const arr = [12, 34, 56, 78, 90];

log(1, arr.print_01());
log(1, arr.print_01_());

// log(arr.print_02());
// log(arr.print_02_());

// log(3, arr.print_03());
// log(4, arr.print_04());
// log(5, arr.print_05());

/*
- стрелочные функции не имеют своего this
- они берут this из внешнего контекста, где были объявлены
- в глобальной области видимости this ссылается на глобальный объект
- это window в браузере или global в Node.js
*/

String.prototype.print = function() { }