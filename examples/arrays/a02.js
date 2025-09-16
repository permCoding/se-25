const arr1 = Array.from([1,2,3], (x) => x * x);
console.log(arr1); // [1, 4, 9]

const arr2 = Array.from({length: 5}, (x,i) => i);
console.log(arr2); // [0,1,2,3,4]

const arr3 = Array.from('12345');
console.log(arr3); // ['1','2','3','4','5']

const arr4 = Array.from('12345', Number);
console.log(arr4); // [1,2,3,4,5]

const arr5 = Array.from('12345', n => +n);
console.log(arr5); // [1,2,3,4,5]

const arr6 = Array.from('12345', parseInt);
console.log(arr6); // [1,NaN,NaN,NaN,NaN]
// parseInt('12345', 10) - два аргумента
// в данном случае передаётся "цифра" и индекс цифры
// если индекс = 0, то это 10-ричная система счисления
// если индекс = 2, то это 2-ная система счисления
// если индекс = 1, то такое СС не бывает
// если цифра "3" и индекс её 2, то такого не может быть

const arr7 = Array.from('12123', parseInt);
console.log(arr7); // [1,NaN,1,2,3]

const arr8 = Array.from('129123', d => parseInt(d, 10));
console.log(arr8); // [1,2,9,1,2,3]
