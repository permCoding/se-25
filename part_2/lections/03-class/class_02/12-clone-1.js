// npm install lodash
// неглубокое клонирование 

const _ = require('lodash');
const log = console.log;

let source = {
    name: 'Alex',
    age: 22,
    toString: function () {
        return `name -> ${this.name}, age -> ${this.age}`
    }
};

let target = _.clone(source); // клонируем объект

source.age += 1;

log(`source => ${source.toString()}`); // .toString()
log(`target => ${target.toString()}`);

log(Object.keys(target));
log(Object.keys(source));

log(target); log(source);


