const log = console.log;
const arr = ['a', 'b', 'c'];

const ex_01 = () => {
    for (let value of arr) { log('value =', value); }
    for (let key in arr) { log('key =', key); }
    log('typeof -', typeof(arr));
    
    log(arr.keys());
    log(arr.values());
    log(arr.entries());
    
    for(let e of arr.entries()) { log(e); }
    log(arr.keys().toArray());
    arr.forEach((element, index) => {
        log(index, element);
    });
}

const ex_02 = () => {
    const it = arr[Symbol.iterator]();
    let nextObj = it.next();
    while (!nextObj.done) {
        log('next =>', nextObj.value);
        nextObj = it.next();
    }    
}

const ex_03 = () => {
    const it = arr[Symbol.iterator]();
    let nextObj;
    while (!(nextObj = it.next()).done) {
        log('next =>', nextObj.value);
    }    
}

ex_01();
