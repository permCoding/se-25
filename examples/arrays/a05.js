const log = console.log;
const arr = [1,2,3,4,5];

log(arr.keys()); // Iterator
[...arr.keys()].forEach(log); // объяснить почему так
[...arr.keys()].forEach(i => log(i));

arr.values().forEach((value, index) => log(index, value));

arr.entries().forEach(pair => log(pair));

delete arr[2];
log(arr, arr.length);
arr.entries().forEach(pair => log(pair));

const arr_ = [,1, 2, , , 5, 6];
for (let i of arr_.keys()) {
    if (arr_[i] === undefined) {
        log(i, '  undefined');
    } else {
        log(i, arr_[i]);
    }
}
for (let value of arr_.values()) {
    if (value !== undefined) {
        log(value);
    }
}

for (let [index, value] of arr_.entries()) {
    log(index, value !== undefined ? value : '');
}