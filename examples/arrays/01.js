let arr_d = [1, 2, 3];
console.log(arr_d);
arr_d.reverse(); // работает на месте
console.log(arr_d.join()); // соединяет по запятой


let arr = new Array(5);
console.log(arr);

let str1 = new Array(5).join("5");

let n = 6;
let str2 = new Array(n).join(n);

console.log(str1, str2);

let str3 = new Array(n).fill('-').join(n);
console.log(str3);

let str4 = new Array(n).fill(0).map((x,i) => i+1).join('');
console.log(str4);

let str5 = new Array(n)
    .fill(0)
    .map((x,i) => i+1)
    .filter(x => x%2)
    .join('');
console.log(str5);

console.log(
    new Array(100)
        .fill(0)
        .map((x,i) => i+1)
        .filter(x => x%2)
        .reduce((a,b) => a+b, 0)
);

console.log(
    eval(
        new Array(100)
            .fill(0)
            .map((x,i) => i+1)
            .filter(x => x%2)
            .join('+')
    )
);

let sum = 0;
new Array(100)
    .fill(0)
    .map((x,i) => i+1)
    .filter(x => x%2)
    .forEach(num => sum += num);
console.log(sum);

// можно добавить циклы for по элементам, по индексам и while
