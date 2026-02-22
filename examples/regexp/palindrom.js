const log = console.log;

const ex_01 = (str) => {
    const re = /.*(([А-Я])([А-Я])([А-Я])[А-Я]\4\3\2).*/i;

    const matches = str.match(re);
    // log(matches);
    log(matches[1]);
}

const ex_02 = (str) => {
    const re = /.*(([А-Я])([А-Я])([А-Я])[А-Я]?\4\3\2).*/i;

    const matches = str.match(re);
    // log(matches);
    log(matches[1]);
}

const ex_03 = (str) => { // все палиндромы - не работает - жадный поиск
    const re = /.*(([А-Я])([А-Я])([А-Я])[А-Я]?\4\3\2).*/gi;
    // const re = /\b([А-Я])([А-Я])([А-Я])[А-Я]?\3\2\1\b/gi; // границы не нужны
    // нужен поиск палиндромов и внутри слов

    const palindromes = [...str.matchAll(re)].map(m => m[1]);
    log(palindromes);
}

const ex_04 = (str) => { // все палиндромы - работает - ленивый поиск
    const re = /.*?(([А-Я])([А-Я])([А-Я])[А-Я]?\4\3\2).*?/gi;

    const palindromes = [...str.matchAll(re)].map(m => m[1]);
    log(palindromes);
}

const ex_05 = (str) => { // используем не включающий поиск
    // с просмотром вперёд
    const re = /(?=([А-Я])([А-Я])([А-Я])[А-Я]?\3\2\1)/gi;

    const palindromes = [...str.matchAll(re)].map(m => m[1]);
    log(palindromes);
}

let str = 'Корпус Немомен тут монном и ещё Ханнах.';
ex_01(str);
ex_02(str);
ex_03(str);
ex_04(str);
str = 'момомомо';
ex_04(str);
ex_05(str);
