const log = console.log;

const ex_01 = () => {
    let str = 'abcdef';
    Array
        .from(str)
        .forEach((item, index) => log(index, item));
}

const ex_02 = () => {
    let str = '12345';
    log(Array.from(str, item => +item));
    log(Array.from(str, Number));
    log(Array.from(str, Number).length);
}

const ex_03 = () => {
    log(Array.of('123', 123, { "id": 1002}));
}

const myFunc = (_, ind) => String(ind);
const ex_04 = () => {
    const arr = Array(10)
        .fill(0)
        .map(myFunc);
    log(arr);
    log(arr.slice(0, 2));
    log(arr.keys());
    log(arr.values());
    log(arr.entries());

    for (let pair of arr.entries()) log(pair);
    log(Array.from(arr.values()).map(Number));

}

const ex_05 = () => {
    let arr = [2, 222, 404, 3, 4, 5];
    log(arr.includes(3));
    log(arr.includes(8));
    log(arr.some(item => item % 2));
    log(arr.every(item => item % 2));
    log(arr.every(item => item > 0));
}

const ex_06 = () => {
    const users = require('./users.json')
    log(users);
    log(JSON.stringify(users));
    log(JSON.stringify(users, null, 2));
    log(JSON.stringify(users, ['title'], 2));
}

const ex_07 = () => {
    const users = require('./users.json');
    log(users.find(user => user.title == "student"));
    let nameField = "title";
    let valueField = "student";
    log(users.find(user => user[nameField] == valueField));
    log(users
        .find(user => user[nameField] == valueField)['id']
    );
    log(users
        .find(user => user[nameField] == valueField)
        .id
    );
    let ind = users.findIndex(user => user.title == "student");
    log(ind, users[ind]);
}

const ex_08 = () => {
    const users = require('./users.json')
        .map(obj => { return { 
            "id": String(obj.id), 
            "title": obj.title 
        } 
    });
    log(JSON.stringify(users, null, 2));
    require('fs')
        .writeFileSync(
            "./users_str.json", 
            JSON.stringify(users, null, 2), 
            'utf-8'
        );
}

const ex_09 = () => {
    let users = require('./users_str.json');
    users.sort((a, b) => a.id > b.id? +1: -1); // на месте
    log(users);
}

const ex_10 = () => {
    let users = require('./users_str.json');
    let sorted = users
        .slice()
        .sort((a, b) => +a.id > +b.id? +1: -1); // на месте
    log(users);
    log(sorted);
}

const ex_11 = () => {
    log(
        require('./users_str.json')
            .sort((a, b) => a.id - b.id)
    );
}

ex_11();

/*
ex_12() самостоятельно
отсортировать по двум параметрам
1) сначала по title
2) потом по id
*/