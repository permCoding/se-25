// типизированные массивы - это истинные массивы примитивов - ES2015
// Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array
// Float32Array, Float64Array
// BigInt64Array, BigUint64Array
// занимают последовательный блок памяти
// можно использовать в worker`ах в параллельных вычислениях

const log = console.log;

const tArr = new Uint8Array(10); // инициализация массива нулями

tArr[5] = "100"; // преобразуется к числу
log(tArr);

tArr[0] = -1; // 255
log(tArr);

tArr[1] = 256; // 0
tArr[2] = 257; // 1
log(tArr);
tArr[1] = 256; // 255