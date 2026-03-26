const log = console.log;

const task_01 = (arr) => {
    const st = new Set();
    const u1 = st.size == arr.length;
    // if 
}

const task_02 = (arr) => {
    const obj = {}
    arr.forEach(key => obj[key] = (obj[key] || 0) + 1);
    const u1 = '1113' == Object.values(obj).toSorted().join('');

    const sm_p = arr.reduce((acc, key) => acc + (obj[key]==3? key: 0), 0);
    const sm_n = arr.reduce((acc, key) => acc + (obj[key]!=3? key: 0), 0);
    const u2 = 3 * sm_p > sm_n;

    return u1 && u2;
}

const task_03 = () => {
    // const arr = [12, 5, 4, 512, 44, 55];
    // const arr = [12, 33, 44, 12, 44, 155];
    const arr = [2, 2, 3, 3, 0, 100];

    const mp = new Map();
    arr.forEach(key => mp.set(key, mp.has(key)? mp.get(key)+1: 1));

    let res = [0, 0, 0, 0, 0, 0];
    [...mp.values()].forEach(key => res[key] += 1);
    const u1 = res[1] == 2 && res[2] == 2;

    const sm_n = arr.reduce((acc, key) => acc + (mp.get(key)==1? key: 0), 0);
    const u2 = arr.reduce((a, b) => a+b) < 2*sm_n;

    log(u1 && u2);
}


// '33 12 33 55 55 12\n3 1 404 55 55 55\n5 77 4 77 2 77'
//     .split('\n')
//     .forEach((line, ind) => log(ind+1, line, task_02(line.split(' '))));
task_03();
