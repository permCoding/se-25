function createCounter(start = 0, step = 1) {
    let count = start - step; // переменная count "замыкается"

    return function() {
        count += step;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

const counter_E = createCounter(10, 2);

console.log(counter_E()); // 10
console.log(counter_E()); // 12
console.log(counter_E()); // 14
