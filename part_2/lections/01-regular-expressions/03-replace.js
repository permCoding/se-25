// задача: сменить стиль нейминга переменных
// camelCase => snake_case
const log = console.log;

const camelToSnake = str => str.replace(
    /([A-Z])/g, // реализация replaceALL
    match => `_${match.toLowerCase()}` // добавляем _
);

const ex_01 = () => { // смена стиля нейминга
    
    let camelCases = ['backGroundColor', 'borderWidth', 'fontSize'];
    // не проверяем корректность исходного нейминга
    let snakeCases = camelCases.map(camelToSnake); // снизили когнитивную нагрузку
    log(1, snakeCases); // back_ground_color border_width font_size
}

const code = `
    let backGroundColor = '#fff';
    console.log(backGroundColor);
    const fontSize = 14;
    var borderWidth = 1;
    let Obj = JSON.parse('{"ABC": 1024, "idUser": 2}');
`;

const ex_02 = () => { // получение имен переменных из кода
    const regex = /((let|const|var)\s+([A-Za-z0-9]+)\s*=\s*)/g;
    let matches = code.matchAll(regex);
    log(2, [...matches].map(m => m[3]));
}

const ex_03 = () => { // замена переменных в коде
    log(3, code.replace(/([A-Z])/g, m => '_' + m.toLowerCase()));
} // так - слишком самонадеянно - меняет всё, даже _obj

const ex_04 = () => { // замена только объявлений переменных в коде
    const regex = /(?<!(let|const|var)\s+)([A-Z][a-z0-9]*[A-Za-z0-9]+)(?=\s*=)/g;
    log(4, code.replace(regex, m => '_'+m.toLowerCase()));
} // fine - back_ground_color border_width font_size JSON ABC

const ex_05 = () => { // замена ВСЕХ переменных в коде
    const regex = /[a-z]+([A-Z][a-z0-9]+)+/g;
    
    log(5, [...code.matchAll(regex)].map(m => m[0])); // найти все
    // [ 'backGroundColor', 'backGroundColor', 'fontSize', 'borderWidth' ]
    
    log(5, code.replace(regex, camelToSnake)); // реализация replaceALL
    // back_ground_color back_ground_color font_size border_width id_user
} // all

ex_01();
ex_02();
ex_03();
ex_04();
ex_05();
