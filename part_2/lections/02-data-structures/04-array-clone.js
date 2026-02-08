// клонирования и копирование массива
// в JS копирование:
// - поверхностное (shallow) - копирует ссылки на вложенные данные
// - и глубокое (deep) -  полная независимая копия данных
const log = console.log;

const ex_01 = () => { // поверхностное копирование МАССИВА
    const arr = [1, { 'id': 1024 }];
    const copy1 = [...arr]; // ✅ Spread (ES6)
    const copy2 = arr.slice(); // ✅ slice()
    const copyBad = arr; // ❌ ссылка на исходный массив
    
    arr[0] += 100; // примитив - значение - НЕЗАВИСЫМЫЕ ДАННЫЕ
    log(arr); log(copy1); log(copy2); log(copyBad);

    arr[1]['id'] *= 2; // НЕ примитив - ссылка - ЗАВИСЫМЫЕ ДАННЫЕ
    log(arr); log(copy1); log(copy2); log(copyBad);
}

const ex_02 = () => { // поверхностное копирование ОБЪЕКТА
    const obj = { 'id': 1024, 'args': { 'tmp': 21 } };
    const copy1 = {...obj}; // ✅ Spread (ES6)
    const copy2 = Object.assign({}, obj); // ✅ Object.assign
    const copyBad = obj; // ❌ ссылка на исходный объект
    
    obj['id'] *= 2; // примитив - значение - НЕЗАВИСЫМЫЕ ДАННЫЕ
    log(obj); log(copy1); log(copy2); log(copyBad);

    obj['args']['tmp'] = 0; // НЕ примитив - ссылка - ЗАВИСЫМЫЕ ДАННЫЕ
    log(obj); log(copy1); log(copy2); log(copyBad);
}

const ex_03 = () => { // глубокое копирование МАССИВА
    const arr = [1, { 'id': 1024 }];
    const clone = structuredClone(arr);
    arr[0] += 100;
    arr[1]['id'] *= 2;
    log(arr); log(clone);
}

const ex_04 = () => { // глубокое копирование ОБЪЕКТА
    const obj = { 'id': 1024, 'args': { 'tmp': 21 } };
    const clone = structuredClone(obj);
    obj['id'] *= 2;
    obj['args']['tmp'] = 0;
    log(obj); log(clone);
}

const ex_05_lodash = () => { // - поверхностное: _.clone()
    const { clone } = require('lodash');
    
    const arr = [1, { 'id': 1024 }];
    const obj = { 'id': 1024, 'args': { 'tmp': 21 } };
    
    const arrCopy = clone(arr);
    const objCopy = clone(obj);

    arr[0] += 100; arr[1]['id'] *= 2;
    obj['id'] *= 2; obj['args']['tmp'] = 0;

    log(arr); log(arrCopy); log(obj); log(objCopy);
}

const ex_06_lodash = () => { // - глубокое: _.cloneDeep()
    const { cloneDeep } = require('lodash');
    
    const arr = [1, { 'id': 1024 }];
    const obj = { 'id': 1024, 'args': { 'tmp': 21 } };
    
    const deepArrCopy = cloneDeep(arr);
    const deepObjCopy = cloneDeep(obj);

    arr[0] += 100; arr[1]['id'] *= 2;
    obj['id'] *= 2; obj['args']['tmp'] = 0;

    log(arr); log(deepArrCopy); log(obj); log(deepObjCopy);
    
}

// ex_01();
// ex_02();
// ex_03();
// ex_04();
// ex_05_lodash();
ex_06_lodash();
