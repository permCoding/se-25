const isEqual = (a, b) => Math.abs(a - b) < Number.EPSILON;

console.log(isEqual(0.1 + 0.2, 0.3)); // true
console.log(isEqual(0.1 + 0.2, 0.4)); // false
console.log(isEqual(1.0000000000000001, 1)); // true (компьютер их и так не различит, но формула работает)
