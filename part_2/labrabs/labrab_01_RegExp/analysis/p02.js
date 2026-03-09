const log = console.log;

const arr = [
    "A0",
    "A00",
    "A",
    "AA",
    "AB",
    "A0F",
    "B",
    "B0"
] // не надо переводить в BigInt

log([...arr].sort()); //  A  A0  A00  A0F  AA  AB  B  B0
log([...arr].sort().at(-1)); // B0

const sortedAsc = [...arr].sort((a, b) => a.length - b.length);
log(sortedAsc); // ["A", "B", "A0", "AA", "AB", "B0", "A00", "A0F"]
log(sortedAsc.at(-1)); // A0F
// но sort работает медленно для больших коллекций
// лучше использовать reduce или max или циклы

log(arr.reduce((max, cur) => cur.length > max.length ? cur : max, '')); // A00
// так будет ошибка => A00 и изменить знак сравнения на >= не решает проблему

log( // с дополнительным условием
    arr.reduce((max, cur) => {
        if (cur.length > max.length) { return cur; }
        if (cur.length == max.length && cur > max) { return cur; }
        return max; // иначе оставляем текущего лучшую
    }, '')
); // A0F

log( // с дополнительным условием
    arr.reduce((max, cur) => {
        if (cur.length > max.length) { return cur; }
        if (cur.length == max.length && cur > max) { return cur; }
        return max; // иначе оставляем текущего лучшую
    }, '')
); // A0F


const maxLength = Math.max(...arr.map(str => str.length));
const arrLongest = arr.filter(str => str.length == maxLength);
log(arrLongest.reduce((max, cur) => cur > max ? cur : max)); // A0F
log(arrLongest.toSorted().at(-1)); // A0F
