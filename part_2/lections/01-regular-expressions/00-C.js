const log = console.log;

const ex_01 = () => { // невключающие группы
    let str = `
        https://regex101.com/
        https://www.youtube.com
        http://api.github.com/   `;

    let re = /(?:https?):\/{2}(?:www\.)?([^\/.]+)(?:\.com)/g;
    log([...str.matchAll(re)].map(m => m[1])); 
    // ["regex101", "youtube"]

    re = /(?:https?):\/{2}(?:www\.)?(.+)(?:\.com)/g;
    log([...str.matchAll(re)].map(m => m[1])); 
    // ["regex101", "youtube", "api.github"]

    re = /(?:https?):\/{2}(?:www\.)?(.+)(?:\b)/g;
    log([...str.matchAll(re)].map(m => m[1])); 
    // [ 'regex101.com', 'youtube.com', 'api.github.com' ]
}

const ex_02 = () => { // группы + обратные ссылка (backreference)
    // нумерация групп слева направо по порядку открывающих скобок (, 
    // игнорируя незахватывающие группы (?:...).
    let str = `2026 666 ASA 11 1024 1606 27072`;

    let re = /((\d{1})\d{1}\2)/g;
    log([...str.matchAll(re)].map(m => m[1])); 
    // [ '202', '666', '606', '707' ]

    re = /(?:\d)((\d)\d\2)(?:\d)/g;
    log([...str.matchAll(re)].map(m => m[1])); 
    // [ '707' ]
    
    re = /((\d)(\d)\d\3\2)/g;
    log([...str.matchAll(re)].map(m => m[1])); 
    // [ '27072' ]
}

ex_01();
ex_02();
