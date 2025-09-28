const sum = (...numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
   
const numbers = [1, 3, 5, 7]
console.log(sum(...numbers)); // 16

// оператор ... - spread - распаковать массив
// функция sum принимает любое количество аргументов
// ...numbers - распаковывает массив numbers в отдельные аргументы