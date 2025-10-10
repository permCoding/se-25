let str = '100 9 8 3 2 1 10 12 303 33';

let arr = str.split(' ');

console.log(arr);
console.log(
    arr
        .slice()
        .sort()
);
console.log(
    arr
        .slice()
        .sort((a, b) => a > b? +1: -1)
);
console.log(
    arr
        .slice()
        .sort((a, b) => +a > +b? +1: -1)
);
console.log(
    arr
        .slice()
        .sort((a, b) => a - b)
);
console.log(
    arr
        .slice()
        .map(Number)
        .sort((a, b) => a - b)
);
