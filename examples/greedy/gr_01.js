/*
есть купюры: 1, 5, 10, 50, 100
нужно набрать сумму 190 так
чтобы кол-во купюр было наименьшим
решать - жадным алгоритмом
*/

// let arr = [1, 5, 10, 50, 100]; // для этих данных решение оптимальное
let arr = [5, 45, 155]; // тут жадный алгоритм находит НЕ оптимальное решение
let limit = 190;

// arr.sort(); // так не работает - strings
// console.log(arr);
let ch = (a,b) => b-a;
arr.sort(ch);
console.log(arr);

let sum = 0, i = 0;
let solver = [];
while (i < arr.length) {
    if (sum + arr[i] <= limit) {
        solver.push(arr[i]);
        sum += arr[i]; // тут недостаток
        // можно брать НЕ по одному, а сразу несколько
    } else {
        i++;
    }
}
console.log(solver, solver.length);
