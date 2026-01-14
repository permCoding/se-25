const log = console.log;

const ex01 = () => { // ES5 - повторяем имена
    let a = 1, b = 2, c = 3
    obj = {
        a: a,
        b: b,
        c: c
    }
    log(1, obj)
}

const ex02 = () => { // ES6 - имена сами повторяются
    let a = 1, b = 2, c = 3
    obj = {
        a,
        b,
        c
    }
    log(2, obj)
}

/** ES6 - деструктурирование 
 * импорт свойств объектов в переменные 
 * так можно делать и при импорте из модулей:
 * let { readFileSync, writeFileSync } = require('fs')
 */
const ex03 = () => {
    let obj = { a: 12, b: 10 }
    let { a, b } = obj  // деструктуризация
    log(3, `a = ${a}, b = ${b}`)

    obj = { a: 12, b: 10 }
    let { a: x, b: y } = obj // деструктуризация с назначением переменных
    log(3, `x = ${x}, y = ${y}`)

    let i, j; // если переменные были объявлены заранее
    obj = { i: 12, j: 10 }; // тут нужнен символ -> ;
    ({i, j} = obj) // чтобы эти () сработали
    i++; j--; // это теперь отдельные несвязанные переменные
    log(3, `i = ${i}, j = ${j}`, obj)
}

/** и можно сразу определять функции без "name": function */
const ex04 = () => {
    const obj1 = { // классика
        sum: function (a, b)  { return a + b },
        mult: function (a, b) { return a * b }
    }

    log(4.2, obj1.sum(6, 5) )
    log(4.2, obj1.mult(6, 5) )

    const obj2 = { // лаконично
        sum(a, b)  { return a + b },
        mult(a, b) { return a * b }
    }

    log(4.1, obj2.sum(12, 10) )
    log(4.1, obj2.mult(12, 10) )

    // но стрелочные только через имена, чтобы была ссылка
    const obj3 = {
        sum:  (a, b) => a + b,
        mult: (a, b) => a * b
    }

    log(4.3, obj3.sum(25, 11) )
    log(4.3, obj3.mult(25, 11) )
}

const ex05 = () => { // оператор spread (расширение) для объектов
    let obj = { a: '001', b: 2, c: 3 }
    let { a, ...subObj } = obj; // при деструктуризации
    log( 5.1, a, subObj )

    const func = function({ a, ...x }) {
        log( 5.2, a, x )
    }
    func( obj )

    let objA = { a: 1001, b: 2002 }
    let objB = { ...objA, c: 3003 } // сборка
    log( 5.3, objB )
}

const ex06 = (key="din") => { // динамические ключи
    let obj_m = key + '_m'
    const obj = {
        a: 12,
        [key + "_p"]: 10, // на лету
        [obj_m]: function (b) { return this.a + b }
    }

    log( 6, obj )
    log( 6, obj[obj_m](10) )
}

// console.clear(); // очистка консоли Linux
ex01(); log();
ex02(); log();
ex03(); log();
ex04(); log();
ex05(); log();
ex06(); log();
