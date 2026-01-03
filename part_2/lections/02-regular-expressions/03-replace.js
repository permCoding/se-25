// задача: сменить стиль нейминга переменных
// camelCase => snake_case
const log = console.log;

const ex_01 = () => { // смена стиля нейминга
    const camelToSnake = str => str
        .replace(/([A-Z])/g, match => `_${match.toLowerCase()}`);

    let camelCases = [
        'backGroundColor', 
        'borderWidth', 
        'fontSize'
    ];
    
    let snakeCases = camelCases.map(camelToSnake);
    console.log(snakeCases); // back_ground_color border_width font_size    
}

const ex_02 = () => { // получение имен переменных из кода
    const code = `
        let backGroundColor = '#fff';
        console.log(backGroundColor);
        const fontSize = 14;
        var borderWidth = 1;
    `;

    const regex = /((let|const|var)\s+([A-Za-z0-9]+)\s*=\s*)/g;
    let matches = code.matchAll(regex);

    let var_names = [...matches].map(m => m[3]);
    log(var_names);
}

const ex_03 = () => { // замена переменных в коде
    const code = `
        let backGroundColor = '#fff';
        console.log(backGroundColor);
        const fontSize = 14;
        var borderWidth = 1;
    `;

    log(code.replace(/([A-Z])/g, m => '_'+m.toLowerCase()));
}

ex_01();
ex_02();
ex_03();
