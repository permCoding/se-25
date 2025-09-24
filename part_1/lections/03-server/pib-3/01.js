const log = console.log;
const amount = 5;
const arr = [];

while (arr.length < amount) {
    arr.push( Math.floor(10*Math.random()) );
}

const set = new Set(arr);

log(arr, set);
