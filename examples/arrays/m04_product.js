const product = (arr, repeat = 2) => {
    const addItem = comb => arr.map(item => [...comb, item]);
    // берём комбинацию и добавляем по-очереди 1 символ из массива
    // получется массив новых комбинаций
    // было ['A'] стало [ ['A','A'], ['A','B'], ['A','C'] ]
    
    let result = [ [] ];
    
    for (let i = 0; i < repeat; i++) {
        result = result.flatMap( addItem );
        // console.log(result); // это только для контроля
    }
    
    return result;
}
  
const alph = 'ABC';
const symbols = alph.split(''); // [ 'A', 'B', 'C' ]

const combinations = product(symbols, 2);
console.log(combinations);
/*
[
  [ 'A', 'A' ],
  [ 'A', 'B' ],
  [ 'A', 'C' ],
  [ 'B', 'A' ],
  [ 'B', 'B' ],
  [ 'B', 'C' ],
  [ 'C', 'A' ],
  [ 'C', 'B' ],
  [ 'C', 'C' ]
]
*/