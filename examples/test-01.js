let objA = {
    "id": 1001,
    "weight": 1024
}

let objB = {
    toString: () => '123-'
}

console.log(objA);
console.log(objB);
console.log(objB.toString().repeat(3));
console.log( 
    String.prototype.repeat.call(objB, 5)
);
