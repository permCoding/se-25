const assert = require('assert');

// Функция для поиска минимального из положительных элемента массива
const findMin = arr => Math.min(...arr.filter(x => x>0));

// тесты
let tests = [
    [ [ 5, 2, 9, 1, 7 ], 1 ],
    [ [ -10, 0, 10 ], 10 ],
    [ [ 42 ], 42 ],
    [ [ 2, 1, 0, -1 ], 1 ]
]

for (let test of tests) {
    assert.equal(findMin(test[0]), test[1], `должен быть ${test[1]}`);
}

console.log('Все тесты прошли успешно!');
