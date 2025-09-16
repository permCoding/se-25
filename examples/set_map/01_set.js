const ex_01 = () => {
    const uniqueNumbers = new Set([1, 2, 3, 2, 1]);

    uniqueNumbers.add(3); // не добавит
    uniqueNumbers.add(4); // только уникальные значения

    console.log(uniqueNumbers.has(3)); // true
    console.log(uniqueNumbers, uniqueNumbers.size); // 4

    // перебор элементов множества
    for (let value of uniqueNumbers) {
        console.log(value);
    }

    uniqueNumbers.forEach((value) => {
        console.log(value);
    });
}

const ex_02 = () => {
    const st = new Set([1,3,6,7,3,3]); // создаем множество
    const arr = [...st]; // преобразуем множество в массив
    console.log(arr, typeof arr, typeof st); // [1, 3, 6, 7] object object

    console.log(Array.isArray(arr)); // true
    console.log(Array.isArray(st)); // false
    console.log(arr instanceof Array); // true
    console.log(st instanceof Array); // false
    console.log(arr.constructor === Array); // true
    console.log(st.constructor === Array); // false
    console.log(st.constructor === Set); // true

    // удалим дубликаты из массива
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    const uniqNumbers = [...new Set(numbers)];
    console.log(uniqNumbers); // [1, 2, 3, 4, 5]
}

ex_01();
// ex_02();
