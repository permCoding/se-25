const log = console.log;

const ex_01 = (str, re) => {
    const arr = [];
    let m;
    while ((m = re.exec(str)) !== null) {
        arr.push({
            flo: m[1]
        });
    }
    return arr;
}

const ex_02 = (str, re) => [...str.matchAll(re)].map(m => ( {"flo": m[1]} ));

const ex_03 = (str, re) => Array.from(str.matchAll(re)).map(m => ({ flo: m[1] }));

const ex_04_ = (str, re) => Array.from(str.matchAll(re), m => m); // посмотрим что внутри
const ex_04 = (str, re) => Array.from(str.matchAll(re), m => ({ flo: m[1] }) ); // так быстрее

const ex_05 = (str, re) => {
    return Array.from(str.matchAll(re), ([fullMatch, floatNum], index) => ({
        id: index + 1,
        original: fullMatch,
        flo: floatNum,
        rounded: Math.round(parseFloat(floatNum) * 100) / 100,
        // rounded: parseFloat(parseFloat(floatNum).toFixed(2)),
        isValid: parseFloat(floatNum) > 1.00
    }));
}

const ex_time = (str, re) => { // тест производительности
    const count = 200_000;

    console.time('1) Spread + map')
    for (let i = 0; i < count; i++) {
        // [...str.matchAll(re)].map(m => ({ flo: m[1] })); // 180 ms
        [...str.matchAll(re).map(m => ({ flo: m[1] }))]; // 200 ms
    }
    console.timeEnd('1) Spread + map');

    console.time('2) Array.from + map');
    for (let i = 0; i < count; i++) {
        Array.from(str.matchAll(re), m => ({ flo: m[1] })); // 250 ms
    }
    console.timeEnd('2) Array.from + map');
}


const str = `
    Есть строка 23. Но бывает строка B12.
    Реже встречается Строка   2.23. 
    25 строка удалена.
    Иногда обнаруживается строка 
    0.1024
`;
const re = /Строка[\s]*?(\d+\.\d+)/gi;

log(1, ex_01(str, re));  // [ { flo: '2.23' }, { flo: '0.1024' } ]
log(2, ex_02(str, re));  // [ { flo: '2.23' }, { flo: '0.1024' } ]
log(3, ex_03(str, re));  // [ { flo: '2.23' }, { flo: '0.1024' } ]
log(ex_04_(str, re));
log(4, ex_04(str, re));  // [ { flo: '2.23' }, { flo: '0.1024' } ]
log(ex_05(str, re));

ex_time(str, re);

/*
цикл while может быть эффективен для досрочного окончания
наполнения массива после найденного объекта по условию

вариант с matchAll более эффективен
1) функциональный стиль - лаконично и читабельно, меньше строк кода
2) не нужны лишние переменные и лишние функции по добавлению элементов
3) в движках JS методы matchAll и функциональные map, filter 
   оптимизированы для работы с большими коллекциями
4) меньше вероятности ошибиться с оформления цикла while, создать бесконечный цикл


[
  [
    'Строка   2.23',
    '2.23',
    index: 64,
    input: '\n' +
      '    Есть строка 23. Но бывает строка B12.\n' +
      '    Реже встречается Строка   2.23. \n' +
      '    25 строка удалена.\n' +
      '    Иногда обнаруживается строка \n' +
      '    0.1024\n',
    groups: undefined
  ],
  ...
*/