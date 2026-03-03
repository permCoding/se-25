const log = console.log;

const ex_01 = () => { // латиница
    const str = 'Wwell, winnnnnterr hhas comeee!';

    const re = /([а-яёa-zA-Z])\1+/gi;
    log(str.replace(re, '$1'));
}

const ex_02 = () => { // кириллица
    const str = 'Нну ВВвот ииии нассссталллло ллето!';

    const re = /([а-яё])\1+/gi;
    const f = m => m[0];
    log(str.replace(re, f));
}

ex_01();
ex_02();

/*
В русском языке буквы Н и н считаются разными символами 
с точки зрения регулярных выражений, потому что у них 
разные коды в Unicode, несмотря на флаг i.
*/