const ex_01 = (arr) => {
    arr.sort((a, b) =>
        a % 2 ? b % 2 ? a - b : -1 : b % 2 ? 1 : a - b
    );
    log(arr);
}

const ex_02 = (arr) => {
    arr.sort((a, b) => {
        if (a%2 == b%2) return a-b;
        return b%2 - a%2;
    });
    log(arr);
}

const log = console.log;
const array = [42, 67, 3, 23, 14];

ex_01(array);
// ex_02(array);
 // [3, 23, 67, 14, 42]