const numbers = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s != '')
    .map(Number)
    .slice(1,);

console.log( Math.max(...numbers) ); // ... - spread operator

// lst = [1,2,3]
// *lst = spread