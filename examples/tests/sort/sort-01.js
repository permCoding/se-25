let arr = [1, -2, 15, 2, 0, 8];

arr.sort(function(a, b) { // смотрим попарное сравнение элементов
    console.log( a + " <> " + b );
});

console.log(arr); // сортировка на месте

arr.sort(function(a, b) { // смотрим попарное сравнение элементов
    console.log(a, b);
    return a-b;
});

console.log(arr); // сортировка на месте
