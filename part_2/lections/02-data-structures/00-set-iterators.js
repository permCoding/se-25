const log = console.log

const st = new Set([12, 33, 45, 33])


st.forEach((value, againValue, set) => { log(value, set.size) })
// в Set forEach передает значение дважды для совместимости с Map


Array.from(st).forEach(item => log(item)); // через Array.from()
// именно тут нельзя убрать ;

[...st].forEach(item => log(item)) // через оператор spread

// через итераторы
for (const item of st.values()) { log(item) }

for (const key of st.keys()) { log(key) }

// entries() возвращает [value, value]
for (const entry of st.entries()) { log(entry) }


const pairs = [[0,12], [1,33], [2,45], [3,33]];
const mp = new Map(pairs);
mp.forEach((value, key, map) => { log(key, value, map.size) })