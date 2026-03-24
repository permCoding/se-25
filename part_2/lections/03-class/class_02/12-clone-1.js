// npm install lodash
// неглубокое клонирование 

const _ = require('lodash');
const log = console.log;

let source = {
    name: 'Alex',
    age: 22,
    data: {
        f1: 100,
        f2: 999
    },
    toString: function () {
        return `name -> ${this.name}, age -> ${this.age}`
    }
};

let target = _.clone(source); // клонируем объект

source.age += 1;
source.data.f2 = 0;

log(`source => ${source}`); // .toString()
log(`target => ${target}`);

// log(Object.keys(target));
// log(Object.keys(source));

log(source);
log(target); // они зависимы по сложным полям

// log(String(source.toString));
