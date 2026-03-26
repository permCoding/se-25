const log = console.log;

const task_01 = (arr) => {
    const st = new Set();
    const u1 = st.size == arr.length;
    // if 
}

const task_02 = (arr) => {
    const obj = {};
    for (let key of arr) {
        if (obj[key]) {
            obj[key] += 1;
        } else {
            obj[key] = 1;
        }
    }
    // log(JSON.stringify(obj, null, 2));
    const u1 = Object
        .values(obj)
        .every(v => v == 2);
    const u2 = true;
    if (u1 && u2) { log(arr); }
}

const task_03 = () => {
    Map
}


const arr = '33 12 33 55 55 12'.split(' '); // split('\n')
task_02(arr);