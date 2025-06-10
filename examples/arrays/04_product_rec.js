const product = (symbols, repeat) => {
    if (repeat === 0) return [ [] ];

    // Рекурсивно получаем комбинации длины (repeat - 1)
    const predCombs = product(symbols, repeat - 1);

    // Для каждой короткой комбинации добавляем все возможные символы
    return predCombs.flatMap(comb => symbols.map(symbol => [...comb, symbol]));
};

const alph = '0123';
const symbols = alph.split(''); // ['A', 'B', 'C']
const len = 4;
const combinations = product(symbols, len); // все комбинации длиной len

// combinations // все четырёхзначные четверичные числа
//     .map(elm => elm.join('').replace(/^0+/, ''))
//     .filter(elm => elm.length == len)
//     .forEach(elm => console.log(elm));

combinations // все четырёхзначные четверичные числа без повторов цифр
    .map(elm => elm.join('').replace(/^0+/, ''))
    .filter(elm => (elm.length == len) && (new Set(elm).size == len) )
    .forEach(elm => console.log(elm));
