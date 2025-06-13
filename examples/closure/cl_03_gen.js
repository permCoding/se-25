const ex_01 = () => {
    function* limitedCounter(limit) {
        let count = 0;
        while (count < limit) {
            yield count++;
        }
        // неявный return undefined → done: true
        // return undefined; - это можно не писать
    }

    const counter = limitedCounter(3);
    console.log(counter.next()); // {value: 0, done: false}
    console.log(counter.next()); // {value: 1, done: false}
    console.log(counter.next()); // {value: 2, done: false}
    console.log(counter.next()); // {value: undefined, done: true}
}

const ex_02 = () => {
    function* limitedCounter(limit) {
        let count = 0;
        while (count < limit) {
            yield count++;
        }
    }

    const counter = limitedCounter(3);
    let result = counter.next();
    while (!result.done) {
        console.log(result.value);
        result = counter.next();
    }
}

const ex_03 = () => {
    function* limitedCounter(limit) {
        let count = 0;
        while (count < limit) {
            yield count++;
        }
    }

    const counter = limitedCounter(3);
    for (let value of counter) {
        console.log(value);
    }
}

const ex_04 = () => {
    function* limitedCounter(limit) {
        let count = 0;
        while (count < limit) {
            yield count++;
        }
    }

    const counter = limitedCounter(3);
    let current;
    while ((current = counter.next(), !current.done)) {
        console.log(current.value);
    }
}


ex_04();


/*
done: false — генератор может продолжить
done: true  — генератор завершил работу (встретил return или конец функции)
- бесконечные генераторы (например, счётчик) никогда не возвращают done: true
*/