const log = console.log;

const ex_01 = () => { // с просмотром вперёд
    let str = 'AAAAA';

    const re1 = /AA/gi; // [ 'AA', 'AA' ]
    log([...str.matchAll(re1)].map(m => m[0]));
    // после захвата двух AA смещает указатель 
    // на символ сразу после захваченного

    const re2 = /(?=(AA))/gi; // [ 'AA', 'AA', 'AA', 'AA' ]
    log([...str.matchAll(re2)].map(m => m[1]));
    // проверяет каждую позицию в строке и захватывает по две A
    // после захвата смещается вправо на 1 позицию
    // lookahead - проверяет наличие символов, 
    // но не захватывает, не включающий поиск
}

const ex_02 = () => {
    let str = 'aaAAaaaaAaaaaaaaAaaaaaAaa';

    let re1 = /[A]a+[A]/g;
    log([...str.matchAll(re1)].map(m => m[0]));

    let re2 = /(?=([A]a+[A]))/g;
    log([...str.matchAll(re2)].map(m => m[1]));
}


ex_01();
ex_02();