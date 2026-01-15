// создание объекта с помощью класса Object
const log = console.log;

let ex01 = () => {
    let obj1 = new Object( { a: 1, b: 2 } );
    log(obj1);
    
    let obj2 = { a: 1, b: 2 }; // неявно вызывается new Object()
    log(obj2);    
}

let ex02 = () => {
    let arr = [
        ["aaa", 1],
        ["bbb", 2]
    ];
    let obj = Object.fromEntries(arr); // объект из коллекции
    
    obj.cccp = 1989;
    log(obj);

    let list = Object.entries(obj); // коллекция из объекта
    log(list);
}

let ex03 = () => {
    let map = new Map();
    map.set("aaa", 111);
    map.set("bbb", 222);
    log(map);
    let obj = Object.fromEntries(map); // объект из коллекции
    
    obj.cccp = 1972;
    log(obj);

    let list = Object.entries(obj); // коллекция из объекта
    log(list);
}

console.clear();
ex01();
ex02();
ex03();
