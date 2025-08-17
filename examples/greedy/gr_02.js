/*
есть купюры: 1, 5, 10, 50, 100
нужно набрать сумму 190 так
чтобы кол-во купюр было наименьшим
решать - жадным алгоритмом
*/

let arr = [1, 5, 10, 50, 100]; // для этих данных решение оптимальное
// let arr = [5, 45, 155]; // тут жадный алгоритм находит НЕ оптимальное решение
let limit = 190;

// arr.sort(); // так не работает - strings
// console.log(arr);
let ch = (a,b) => b-a;
arr.sort(ch);
console.log(arr);

let sum = 0, i = 0, amount = 0;
let solver = {};
while (i < arr.length) { // можно перебирать НЕ по индексу
    if (sum + arr[i] <= limit) {
        amount = Math.floor((limit - sum) / arr[i]);
        solver[arr[i]] = amount;
        sum += arr[i] * amount; // можно брать сразу несколько
    } else {
        i++;
    }
}

console.log(solver, solver.length);
let amount_items = Object
    .keys(solver)
    .reduce((acc,key) => acc+solver[key], 0);
console.log(amount_items);
