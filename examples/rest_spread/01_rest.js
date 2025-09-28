const sum = (...numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

console.log(sum(3, 5, 4, 1, 2)); // 15

// оператор ... - rest - получить все остальные аргументы