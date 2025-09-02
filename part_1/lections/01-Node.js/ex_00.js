var x1;
let x2;
// const x3; // error - нужно инициализировать
const x3 = +Math.random().toFixed(2);
console.log(x1, x2, x3, typeof x3);

function scopeOut() { // выход за пределы блочной области видимости
    var arr = [1,2,3,4,5];
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        console.log(value);
    }
    console.log('outside loop', i, value);
    console.log(`outside loop, i=${i}, value=${value}`);
}
scopeOut();
