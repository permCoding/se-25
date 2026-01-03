const log = console.log;
const _ = require('lodash');

const ex_01 = (arr) => {
    let comp = (a, b, field) => a[field] >= b[field] ? +1 : -1;
    
    let res = arr
        .sort((a,b) => -comp(a, b, "id"))
        .sort((a,b) => -comp(a, b, "age"))
        .sort((a,b) => comp(a, b, "name"));
    
    log(res); // сортировка НЕстабильна
}

const ex_02 = (arr) => {
    let comp = (a, b, fields, directs) => {
        for (let i = 0; i < fields.length; i++) {
            let field = fields[i];
            let direct = directs[i];
            if (a[field] > b[field]) return direct;
            if (a[field] < b[field]) return -direct;
            // если равны - ищем следующее поле
        }
    }
    
    let fields = ["id", "age", "name"];
    let directs = [-1, -1, +1];
    let res = arr.sort((a,b) => comp(a, b, fields, directs));
    log(res);
}

const ex_03 = (arr) => {
    let fields = ["id", "age", "name"];
    let directs = ["desc", "desc", "asc"];

    log(_(arr).orderBy(fields, directs).value());

    log(_.orderBy(arr, fields, directs));
}

let objects = [
    {id:1, name:"D", age: 27},
    {id:1, name:"E", age: 27},
    {id:2, name:"F", age: 20},
    {id:2, name:"A", age: 20},
    {id:2, name:"B", age: 19},
    {id:1, name:"C", age: 24}
];

ex_01(objects);
ex_02(objects);
ex_03(objects);
