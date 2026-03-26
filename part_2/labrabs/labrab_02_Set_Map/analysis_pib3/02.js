const log = console.log;

const task_01 = (arr) => {
    const st = new Set();
    const u1 = st.size == arr.length;
    // if 
}

const task_02 = (arr) => {
    const obj = {};
    for (let key of arr) {
        // obj[key] = obj[key]? obj[key]+1: 1; // ver 2
        obj[key] = (obj[key] || 0) + 1; // ver 3
                                    // obj[key] = 1; obj[key] += 1;
    }
    log(JSON.stringify(obj, null, 2));
    log(Object.values(obj)); // [1, 3, 1, 1]
    // const u1 = Object
    //     .values(obj)
    //     .every(v => v == 2);
    
    // const u1 = [2, 2, 2] == Object.values(obj); 
                            // так не работает
                            // сравниваются ссылки на объекты
    // const u1 = [2, 2, 2].toString() == Object.values(obj).toString(); 
    const u1 = [1, 1, 1, 3].join('') == Object
        .values(obj)
        .toSorted()
        .join(''); 

    const u2 = true; //
    return u1 && u2;
}

const task_03 = () => {
    Map
}


'33 12 33 55 55 12\n3 1 404 55 55 55\n5 77 4 77 2 77'
    .split('\n')
    .forEach((line, ind) => log(ind+1, line, task_02(line.split(' '))));
