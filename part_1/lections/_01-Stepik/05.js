const result = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s != '')
    .map(Number)
    .slice(1,)
    .reduce((acc, cur) => cur > acc? cur: acc, -555);

console.log( result );
