const log = console.log;

let json = `
    { 
        "a": 1, 
        "b":   { "c": 2, "d": 3 }, 
        "e": 4, 
        "fff":{ "v": 10 } 
    }`;

log(json);
let obj = JSON.parse(json);

log(obj);
log(JSON.stringify(obj, null, 4));

log(' '.repeat(9), 1); // for in
for (let key in obj) { log(key, obj[key], typeof obj[key]) };

log(' '.repeat(9), 2); // for in
for (let key in obj) { if (typeof obj[key] == 'object') log(key, obj[key]); };

log(' '.repeat(9), 3);
Object
    .keys(obj)
    .filter(key => typeof obj[key] == 'object')
    .forEach(key => { log(key, obj[key]); });

log(' '.repeat(9), 4);
log(Object.entries(obj));

log(' '.repeat(9), 5);
Object
    .entries(obj)
    .filter(([key, value]) => typeof value == 'object')
    .forEach(([key, value]) => { log(key, value); });

log(' '.repeat(9), 6);
for (let pair of Object.entries(obj)) {
    if (typeof pair[1] == 'object') {
        log(pair[0], pair[1]);
    }
} // for of

