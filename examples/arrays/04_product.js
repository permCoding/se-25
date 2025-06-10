const product = (arr, repeat = 2) => {
    let result = [
        []
    ];
    for (let i = 0; i < repeat; i++) {
        result = result.flatMap(
            comb => arr.map(item => [...comb, item])
            // к существующей комбинации добавляем 1 символ
        );
        console.log(result);
    }
    
    return result;
}
  
const alph = 'ABC';
const symbols = alph.split(''); // [ 'A', 'B', 'C' ]

const combinations = product(symbols, 2);
// console.log(combinations);



// import { product } from 'itertools-js';
// const { product } = require('itertools');
// const symbols = ['A', 'B', 'C'];
// const combinations = product(symbols, { repeat: 2 });

// for (let cmb of combinations) {
//     console.log(cmb);
// }
