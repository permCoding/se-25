const ex_01 = () => {
    const myArray = [1,5,7];
    for (let elm in myArray) {
        console.log(elm, typeof elm);
    }
}

const ex_02 = () => {
    const myArray = [1,5,7];
    for (let elm of myArray) {
        console.log(elm, typeof elm);
    }
}

const ex_03 = () => {
    const myArray = {
        0: 1,
        1: 5,
        2: 7
    };
    for (let elm in myArray) {
        console.log(elm);
    }
    for (let key in myArray) {
        console.log(key, myArray[key]);
    }
    console.log(JSON.stringify(myArray, null, 4))
}

ex_01();
ex_02();
ex_03();
