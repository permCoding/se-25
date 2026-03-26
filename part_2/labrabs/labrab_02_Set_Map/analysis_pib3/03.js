const log = console.log;

const task_01 = (arr) => {
    const st = new Set();
    const u1 = st.size == arr.length;
    // if 
}

const task_02 = (arr) => {
    const obj = {}
    arr.forEach(key => obj[key] = (obj[key] || 0) + 1);

    // const obj = arr.reduce((obj, key) => { 
    //     obj[key] = (obj[key] || 0) + 1;
    //     return obj;
    // }, {});
    log(JSON.stringify(obj, null, 2)); 

    const u1 = '1113' == Object.values(obj).toSorted().join(''); 

    let sum_p = 0, sum_n = 0;
    arr.forEach(key => { if (obj[key] == 1) {
            sum_n += +key;
        } else {
            sum_p = +key;
        }
    });
    // const sm = arr.reduce((acc, cur) => acc + obj[cur], 0)
    log(sum_p, sum_n);
    const u2 = 3 * sum_p > sum_n;

    return u1 && u2;
}

const task_03 = () => {
    Map
}


'33 12 33 55 55 12\n3 1 404 55 55 55\n5 77 4 77 2 77'
    .split('\n')
    .forEach((line, ind) => log(ind+1, line, task_02(line.split(' '))));
