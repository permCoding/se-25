function* createCounterGenerator(start = 0, step = 1) {
    let count = start;
    while (true) {
        // на первом шаге возвращает {value: 0, done: false}
        const reset = yield count; // возвращает и ждёт след next()
        if (reset !== undefined) { // reset может получать знач из аргумента next()
            count = reset;
        } else {
            count += step; // на втором шаге возвращает {value: 1, done: false}
        }
    }
}

const counter = createCounterGenerator();

console.log(counter.next().value); // 0 (начальное значение)
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next()) // { value: 3, done: false }

console.log(counter.next(10).value); // сброс на 10
console.log(counter.next().value);   // 11

const counter_E = createCounterGenerator(10, 2);

console.log(counter_E.next().value); // 10
console.log(counter_E.next().value); // 12

/*
- function* - так объявляют функцию-генератор
- вместо return используется yield - он приостанавливает выполнение функции с сохранением его замыкания
- для получения значения нужно вызывать .next().value
- в этом примере внутри функции не return, поэтому .done всегда = false
*/