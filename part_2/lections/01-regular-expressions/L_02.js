const log = console.log;

const ex_01 = () => {
    const str = `Приииииииивед Мммммедведдддд!`;

    const regex = /([А-ЯЁ])\1+/gi;
    const subst = `$1`;
    log(str.match(regex));
    log(str.replace(regex, subst)); // Привед Медвед!
}

const ex_02 = () => {
    const str = `Приииииииивед Мммммедведдддд!`;

    const regex = /([А-ЯЁ])\1+/gi;
    
    const func1 = m => m[0];
    const func2 = (m) => { 
        return m[0];
    };
    function func3(m) { 
        return m[0];
    };
    const func4 = m => `${m.length}${m[0]}`;

    log(str.replace(regex, func1)); // Привед Медвед!
    log(str.replace(regex, func2)); // Привед Медвед!
    log(str.replace(regex, func3)); // Привед Медвед!
    log(str.replace(regex, func4)); // Привед Медвед!
}

ex_01();
ex_02(); // `Пр8ивед 5Медве4д!`;
