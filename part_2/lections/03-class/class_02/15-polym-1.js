// полиморфизм
// базовый Фигура
// наследники Круг, Квадрат, Треугольник
// переопределение методов базового класс
// разные реализации в наследниках

class Figure { // базовый класс
    constructor(len, name="Линия") {
        this.name = name;
        this.len = len;
    }
    get_area() { return this.len; }
    info() { 
        return `Фигура ${this.name}; Размер = ${this.len}` 
    };
}

class Square extends Figure { // расширение класса
    constructor(len) {
        super(len, "Квадрат");
    }
    get_area() { return Math.pow(this.len, 2); }
    info() { 
        return `Площадь фигуры ${this.name} = ${this.get_area()}` 
    };
}

class Circle extends Figure { // расширение класса
    constructor(len) {
        super(len, "Круг");
    }
    get_area() { return (Math.PI * Math.pow(this.len, 2)).toFixed(2) };
    info() { 
        return `Площадь фигуры ${this.name} = ${this.get_area()}` 
    };
}

let figs =  [
    new Square(5),
    new Circle(10),
    new Figure(100, "Отрезок")
];

console.table(figs);
figs.forEach(fig => console.log(fig));
figs.forEach(fig => console.log(fig.info()));
figs.forEach(fig => console.dir(fig));

/* 
        log и dir дают одинаковые выводы когда 
        нет приватных полей и вложенных структур

class Test {
    #private = 'secret'; // с приватными полями
    public = 'visible';
}
const obj = new Test();
console.log(obj);  // Test { public: 'visible' }
console.dir(obj);  // Test { public: 'visible', #private: 'secret' }

const deep = { с глубокой вложенностью
    a: { b: { c: { d: { e: 'deep' } } } } 
};
console.log(deep);  // { a: { b: { c: [Object] } } } (сворачивает)
console.dir(deep, { depth: null });  // полная структура
*/