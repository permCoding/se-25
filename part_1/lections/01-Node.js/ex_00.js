function funcA(value) {
    console.log(value**2)
}

const funcB = () => {};

let n = 10;

(function(value) {
    console.log(value**2)
})(n); // замыкание для переменной n

(value => console.log(value**3))(n);

/*
До появления let и const (ES6) IIFE - Immediately Invoked Function Expression
был основным способом создания блочной области видимости
с изоляцией переменных и функций
*/