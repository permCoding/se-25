const log = console.log;
const addIndex = (_, index) => index+1;

log(new Array(10)
    .fill(0)
    .map( addIndex )
    .filter( elm => elm % 2 ) // true <==> != 0
    // .forEach( (e, i) => log(`arr[${i}] = ${e}`) );
    .reduce( (acc, elm) => acc+elm )
);

// lodash
// let obj = {
//     id: 1002,
//     name: '이순신',
//     'coord': {
//         x: 121,
//         y: 98327293
//     }
// }