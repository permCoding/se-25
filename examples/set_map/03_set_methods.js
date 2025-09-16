const ex_01 = () => {
    const fruits = new Set(['apple', 'banana']);

    // проверить наличие элемента
    console.log(fruits.has('apple')); // true
    console.log(fruits.has('orange')); // false

    fruits.add("orange"); // добавить элемент
    fruits.add("banana"); // дубликат не добавится
    console.log(fruits.has('orange')); // true
    console.log(fruits, fruits.size); // 3 - размер множества

    fruits.delete("apple"); // удалить элемент
    console.log(fruits.has('apple')); // false
    console.log(fruits, fruits.size); // 2

    fruits.clear(); // удалить все
    console.log(fruits, fruits.size); // 0
}

const ex_02 = () => { // union - объединение множеств
    const setA = new Set([1, 2, 3]);
    const setB = new Set([3, 4, 5]);
    const union = new Set([...setA, ...setB]);
    console.log(union); // Set(5) {1, 2, 3, 4, 5}
}

const ex_03 = () => { // intersection - пересечение множеств
    const setA = new Set([1, 2, 3]);
    const setB = new Set([2, 3, 4]);
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    console.log(intersection); // Set(2) {2, 3}
}

const ex_04 = () => { // difference - разность множеств
    const setA = new Set([1, 2, 3]);
    const setB = new Set([2, 3, 4]);
    const difference = new Set([...setA].filter(x => !setB.has(x)));
    console.log(difference); // Set(1) {1}
}

const ex_05 = () => { // symmetricDifference - симметрическая разность множеств
    const setA = new Set([1, 2, 3]);
    const setB = new Set([2, 3, 4]);
    const symmetricDifference = new Set([
        ...[...setA].filter(x => !setB.has(x)),
        ...[...setB].filter(x => !setA.has(x))
    ]);
    console.log(symmetricDifference); // Set(2) {1, 4}
}


// ex_01();
// ex_02();
// ex_03();
// ex_04();
ex_05();
