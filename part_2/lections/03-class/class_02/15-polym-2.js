// полиморфизм как переопределение метода
// один метод - разные реализации
// но можем переопределять не полностью, 
//         !!! а дополнить родительский метод !!!

const log = console.log;

class Figure {
    constructor(len, name="Линия") {
        this.name = name;
        this.len = len;
    }
    get_area() { return this.len };
    info() { log(`Фигура ${this.name}; Размер = ${this.len}`); }
}

class Square extends Figure { // расширение класса
    constructor(len) {
        super(len, "Квадрат");
    }
    get_area() { return Math.pow(this.len, 2); }
    info() {
        super.info(); // дополнить родительский метод
        return `Площадь фигуры = ${this.get_area()}`;
    }
}

class Circle extends Figure { // расширение класса
    constructor(len) {
        super(len, "Круг");
    }
    get_area() { return (Math.PI * Math.pow(this.len, 2)).toFixed(2) };
    info() {
        super.info(); // дополнить родительский метод
        return `Площадь фигуры = ${this.get_area()}` 
    };
}

let figa = new Circle(10); log(figa.info());

let figb = new Square(10); log(figb.info());

/*
Фигура Круг; Размер = 10
Площадь фигуры = 314.16      // это дополнение

Фигура Квадрат; Размер = 10
Площадь фигуры = 100         // это дополнение
*/