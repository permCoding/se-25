const assert = require('assert');

function add(a, b) {
  return a + b + 1;
}

// Тесты

// let x = '123';
// let res = assert.ok(typeof x == 'string');
// console.log(res);
assert.equal(add(2, 3), 5, "2 + 3 должно быть 5");
assert.strictEqual(add(2, 3), 5, "2 + 3 должно быть 5");
// assert.throws(() => { add("2", "3"); }, TypeError, "Должна быть ошибка типа");


console.log('Все тесты прошли успешно!');