const log = console.log;

const ex_01 = () => {
    const str = "2023453290002";

    const arr = Array.from(str).map(Number);
    
    log(arr);
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
            log(str[i], i);
        }
    }
}

const ex_03 = () => {
    const str = "мама мыла раму мылом и руками";
    const dict = {};
    for (let i = 0; i < str.length; i++) {
        dict[str[i]] = i;
    }
    log(JSON.stringify(dict, null, 2));
}

const ex_04 = () => {
    const str = "мама мыла раму мылом и руками";
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (!map.has(str[i])) {
            map.set(str[i], i);
        }
    }
    log(map);
    let obj = Object.fromEntries(map.entries());
    log(JSON.stringify(obj, null, 2));
}

const ex_05 = () => {
    const str = "мама мыла раму мылом и руками";
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i])+1);
        } else {
            map.set(str[i], 1);
        }
    }
    [...map.entries()]
        .sort(([,a], [,b]) => b-a)
        .forEach(elm => log(...elm));
}

ex_01();
ex_02();
ex_03();
ex_04();
ex_05();
