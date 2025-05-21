const assert = require('assert');

// Функция для поиска минимального из положительных элемента массива
const findMin = arr => Math.min(...arr.filter(x => x>0));

// тесты
assert.equal(findMin([5, 2, 9, 1, 7]), 1, 'должен быть 1');
assert.equal(findMin([-10, 0, 10]), 10, 'должен быть 10');
assert.equal(findMin([42]), 42, 'должен быть 42');
assert.equal(findMin([2,0,-1,1]), 1, 'должен быть 1');

console.log('Все тесты прошли успешно!');
