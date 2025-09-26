const fs = require('fs');

const arr = fs
    .readFileSync(0, 'utf-8')
    .trim('\n')
    .split(' ');

for (let i=0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 === 0) {
        console.log(arr);
        break;
    }
}
