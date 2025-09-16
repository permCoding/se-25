const obj = {
    length: 5,
    0: 0,
    1: 1,
    4: 4,
    5: 5,
}

console.log(Array.from(obj));

obj.length = 6;
console.log(Array.from(obj));

obj.length = 3;
console.log(Array.from(obj));

// [ 0, 1, undefined, undefined, 4 ]
// [ 0, 1, undefined, undefined, 4, 5 ]
// [ 0, 1, undefined ]
