/*
есть купюры: 1, 5, 10, 50, 100
нужно набрать сумму 190 так
чтобы кол-во купюр было наименьшим
решать - ДИНАМИКОЙ
*/

// let arr = [1, 5, 10, 50, 100]; // для этих данных решение оптимальное
let arr = [5, 45, 155]; // тут решаем динамикой
let limit = 190;

arr.sort((a,b) => b-a); console.log(arr);

let sum = 0, amount = 0, solver = {}, amount_items = 0;
for (let item of arr) { // тут перебираем НЕ по индексу
    if (sum + item <= limit) {
        amount = Math.floor((limit - sum) / item);
        solver[item] = amount;
        sum += item * amount; // можно брать сразу несколько
        amount_items += amount;
    }
}
console.log(solver, amount_items);
