'use strict';

class RadiusVector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') return `${this.x}:${this.y}`;
        return Math.hypot(this.x, this.y); // √(x² + y²)
    } // Coercion polymorphism - Полиморфизм принуждения

    toString() { // переопределение метода toString()
        return `coordX=${this.x};coordY=${this.y}`; // coordX=3;coordY=4
    }
  
    valueOf() { // переопределение valueOf()
        return Math.hypot(this.x, this.y); // 5
    }
}

const r = new RadiusVector(3, 4);

console.log(+r); // ожидается число - hint === 'number'
console.log(Number(r)); // ожидается число - hint === 'number'

console.log(`${r}`); // ожидается строка - hint === 'string'
console.log(String(r)); // ожидается строка - hint === 'string'
console.log(r.toString()); // [object Object] - если toString() не переопределён
console.log(r.valueOf()); // RadiusVector { x: 3, y: 4 } - если valueOf() не переопределён
console.log("object => ", r); // RadiusVector { x: 3, y: 4 }
/*
5
3:4
[object Object]
RadiusVector { x: 3, y: 4 }

Переменная hint — это параметр метода [Symbol.toPrimitive], 
который указывает какой тип данных ожидается при преобразовании объекта. 
JavaScript автоматически передаёт этот параметр, 
и он может принимать три значения:
  'number' — ожидается число
  'string' — ожидается строка
  'default' — ожидается любой другой тип данных
*/