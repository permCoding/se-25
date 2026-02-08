/*
проверить что две строки являются анаграммами
используя Map()
*/

const log = console.log;

const getMap = (str) => {
    const map = new Map();

    for (let chr of str) {
        if (map.has(chr)) {
            map.set(chr, map.get(chr) + 1);
        } else {
            map.set(chr, 1);
        }
    }

    return map;    
}

const check = (map, strB) => {
    for (let chr of strB) {
        if (!map.has(chr)) { return false; }
        map.set(chr, map.get(chr) - 1);
    }

    // log(map); // для контроля

    // const values = Array.from(map.values());
    // const values = [...map.values()];

    // return [...map.values()].reduce((a, b) => a+b) == 0;
    return [...map.values()].every(elm => elm == 0);
}



const strA = 'средневековье';
// const strB = 'вексорведенье'; // true - анаграмма
// const strB = 'векосорведенье'; // false - лишняя буква
// const strB = 'вексорведенъе'; // false - другая буква
const strB = 'вексорведень'; // false - не хватает буквы

let map = getMap(strA);

log(map);

// log(check(map, strB)); // передаётся по ссылке и обнуляется
// log(map);

// надо создать независимую копию и передать по значению
// так как Map() можно создавать из массива пар:
// const original = new Map([['a', 1], ['b', 2]]);

log(check(new Map([...map]), strB)); // поверхностная копия
log(check(new Map(map), strB)); // поверхностная копия
log(check(structuredClone(map), strB)); // КЛОН - глубокая копия

log(map); // остался неизменным
// часта требубтся немутабельные алгоритмы, методы, функции
