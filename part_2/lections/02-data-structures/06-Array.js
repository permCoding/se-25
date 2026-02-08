const log = console.log;

const ex_01 = () => {
    const arr = [1, 2, 3];

    log(arr.hasOwnProperty('0')); // true; '0' - это свойство
    log(arr.toString()); // "1,2,3" - метод объекта
    arr.foo = 'bar'; // можно добавлять любые свойства

    log(arr); // [1, 2, 3, foo: "bar"]
    log(arr.length); // 3 — length не изменился    
    arr['4'] = '44';
    log(arr, arr.length);
    arr[5] = 55;
    log(arr, arr.length); // [ 1, 2, 3, <1 empty item>, '44', 55, foo: 'bar' ] 6
}

const ex_02 = () => {
    const arr = new Array(3); // [empty × 3]
    log(typeof arr); // object
    log([...arr.keys()]);
    for (let i = 0; i < arr.length; i++) {
        log(i, arr[i], typeof arr[i]);
    }
    
    arr[1] = 666;
    log(arr, arr.length); // [ <1 empty item>, 666, <1 empty item> ]
}

ex_01();

/*
напомню, что в JS:
- всё есть объекты, включая и массивы
- массивы могут хранить любые типы данных
- массивы оптимизированы под числовые индексы
- new Array() - это специализированный объект с методами (map, filter, reduce)
*/