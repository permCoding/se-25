const log = console.log;

let arr = [12, 33, 45, 33];
const st = new Set(arr) // имплементация
log(st, st.size, st.has(33));
log(arr[1]);

const obj = { 'a': 123, 'b': 333 };

for (let key in obj) { log(key, obj[key]) };
for (let val of arr) { log(val) };

log('0 - - - - ');

for (let i=0; i<arr.length; i++) { log(i, arr[i]) };
arr.forEach((elm, i, a) => log(i, elm)); // требую это


log('1 - - - - ');

st.forEach((value, againValue, set) => { log(value, set.size) })
// в Set forEach передает значение дважды для совместимости с Map

const func = (value, againValue, set) => log(value, set.size);
st.forEach(func) // убрал ;

log('2 - - - - '); log('---', Array.from(st))

Array
    .from(st)
    .forEach((item, i) => log(i, item)); // через Array.from()
// именно тут нельзя убрать ;

[...st]
    .reverse()
    .forEach((item,i) => log(i,item)) // через оператор spread ...

log('3 - - - - ');

let a = [100, 9, 10, 1, 99, 2, 9];

a.sort((x, y) => x > y? +10: -2);
log(a, typeof a[0]);

a.sort((x, y) => x - y);
log(a, typeof a[0]);

a = [{ 'a': '123' }, {'a': '100' }, { 'a': '99' }];
a.sort((x, y) => x.a > y.a? +1: -1);
log(a);


log('4 - - - - ');


// через итераторы
for (const item of st.values()) { log(item) }

for (const key of st.keys()) { log(key) }

// entries() возвращает [value, value]
for (const entry of st.entries()) { log(entry) }


const pairs = [[0,12], [1,33], [2,45], [3,33]]
const mp = new Map(pairs)
log(mp, mp.size);
mp.forEach((value, key, map) => { log(key, value, map.size) })

mp
    .forEach((value, key) => log(key, value));

mp
    .values()
    .map((value, key) => {
        let obj = { 
            'val': value 
        };
        return obj
    })
    .forEach(obj => log(obj));
