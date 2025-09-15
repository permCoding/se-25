const uniqueNumbers = new Set([1, 2, 3, 2, 1]);

uniqueNumbers.add(4);

console.log(uniqueNumbers.has(3)); // true

uniqueNumbers.forEach((value) => {
    console.log(value);
});

console.log(uniqueNumbers, uniqueNumbers.size); // 4
