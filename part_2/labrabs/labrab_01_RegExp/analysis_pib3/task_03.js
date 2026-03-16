const fs = require('fs');
const log = console.log;

const str = fs.readFileSync('../task_03.txt', 'utf8');

log(
    str
        .match(/[1-9A-F][0-9A-F]*[02468ACE]/g)
        .reduce((max, cur) => cur.length>max.length? cur: max, '')
);



// let max_len = 0;
// for (let elm of arr) {
//     if (elm.length > max_len) {
//         max_len = elm.length;
//     }
// }
// log(arr.filter(elm => elm.length == max_len));

// Max




// const func = (acc, cur) => { return acc + cur };
// log([0,1,2,3,4,5].reduce(func, 0));


