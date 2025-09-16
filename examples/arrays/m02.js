console.log( Boolean([]) ) // true
console.log(![]) // false
console.log([] == ![])  // true

// = = = = = = = 

const arr = [1, 2, 3, 77, 9];

console.log(arr);
console.log(arr.valueOf());

console.log(arr.toString());  // 1,2,3,77,9
console.log(arr + 5);  // 1,2,3,77,95

// = = = = = = = 

// таблица эмодзи
// https://snipp.ru/handbk/emoji

let str = "😶🐱👽";

console.log(
    str.split('').reverse().join('')
);  // �🐱😶� - тут ломается

console.log(
    Array.from(str).reverse().join('')
);  // 👽🐱😶
