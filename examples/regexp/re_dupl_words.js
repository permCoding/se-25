/*
проверить страницу веб-сервера и  
найти повторяющиеся слова, например, «this this»
*/

const log = console.log;

const ex_01 = (text) => {
    const regex = /\b(\w+)\s+\1\b/gi; // по границам слов
    const matches = text.match(regex);
    log(matches); // ["This this", "test test", "words words"]
}

const ex_02 = (text) => {
    const regex = /\b([А-Яа-яA-Za-z]+)\s+\1\b/giu;
    const matches = text.match(regex);
    log(matches); // ["This this", "test test", "words words"]
    // /u - модификатор юникоды не помогает
    // проблема в сочетании границы слова \b и кириллицы  
    // приходится проверять границ через (?<=^|\s) и (?=\s|$),
}

const ex_03 = (text) => {
    const regex = /(?<=^|\s)([А-Яа-яA-Za-z]+)\s+\1(?=\s|\.|$)/gi;
    const matches = text.match(regex);
    log(matches); // [ 'Это это', 'This this', 'test test', 'words words' ]
}

const text = "Это это This this is a test test with repeated words words.";
ex_01(text); // только латиница
ex_02(text); // только латиница
ex_03(text); // кириллица
