const log = console.log;

const task_dop_1 = () => {  
    const str = "202345329007";
    log('dop_1A =', Array
        .from(str)
        .map(Number)
        .sort(
            // if
            // if
            // if
        )
        .join('')
    ); // 000222497533
    log('dop_1B =', Array
        .from(str)
        .map(Number)
        .sort(
            // (_?_:_) 
        )
        .join('')
    ); // 000222497533
}

task_dop_1();


const ex_01 = () => { // отсортировать символы в строке
    const str = "2023453290002";
    // 0000222249533
    const arr = Array
        .from(str)
        .map(Number);
        // .map(elm => Number(elm));
        // .map(elm => +elm);
    
    log(arr);
    // arr.sort((a,b) => a-b); // сортирует на месте
    log('---',
        arr
            .toSorted((a,b)=> a-b)
            // .map(String)
            // .map(elm => elm.toString())
            // .map(elm => String(elm))
            .join('')
    );
    
    // отсортировать символы в строке без повторов
    const set = new Set(arr);
    log(set, set.size);
    log([...set].toSorted());
    log([...set].toSorted().map(String).join(""));    
}

const ex_02 = () => {
    const str = "мама мыла раму мылом и руками";
    const set = new Set();
    for (let i = 0; i < str.length; i++) {
        if (!set.has(str[i])) {
            set.add(str[i]);
            log(str[i], i); // первые позиции
        }
    }
}

const ex_03 = () => { // последние позиции
    const str = "мама мыла раму мылом и руками";
    const dict = {};
    for (let i = 0; i < str.length; i++) {
        dict[str[i]] = i;
    }
    log(JSON.stringify(dict, null, 2));
}

const ex_04 = () => { // первые позиции
    const str = "мама мыла раму мылом и руками";
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (!map.has(str[i])) {
            map.set(str[i], i);
        }
    }
    log(map); // Map()
    let obj = Object.fromEntries(map.entries());
    log(JSON.stringify(obj, null, 2)); // object
}

const ex_05 = () => {
    const str = "руками и мылом мама мыла раму";
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i])+1);
        } else {
            map.set(str[i], 1);
        }
    }

    for (let [key, value] of map) {
        log({key, value});
    }

    [...map.entries()]
        .sort(([,a], [,b]) => b-a)
        .forEach(elm => log(...elm));
}

ex_01();
// ex_02();
// ex_03();
// ex_04();
// ex_05();
