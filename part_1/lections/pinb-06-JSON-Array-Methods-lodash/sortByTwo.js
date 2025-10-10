let arr = [2, 3, 1, 40, 10, 66, 19, 17, 1];

const ex_01 = () => {
    console.log(
        arr
            .sort((a, b) => a - b)
    );
}

const ex_02 = () => {
    console.log(
        arr
            .sort((a, b) => a%2 - b%2)
    );
}

const ex_03 = () => {
    console.log(
        arr
            .sort((a, b) => {
                if (a%2 - b%2) {
                    return a%2 - b%2;
                }  else {
                    return a - b;
                }
            })
    );
}

const ex_04 = () => {
    console.log(
        arr
            .sort((a, b) => (a%2 - b%2)? a%2 - b%2: a - b)
    );
}

ex_04();

/*
- сортировка по двум параметрам:
1) по чётности  
2) по величине по возрастанию

    2 4 66 100 1 1 3 17 19
*/

// sortByParams([field1, field2], ['asc', 'desc'])