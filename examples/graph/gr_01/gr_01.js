const log = console.log;
const data = require('./gr_01.json');

const get_pairs = (ids) => {
    let pairs = [];
    for (let id of ids) {
        for (let item of data.edges) {
            if (item.v1 == id) { 
                pairs.push({"1":id, "2":item.v2, "d":item.dist}); 
            }
            if (item.v2 == id) { 
                pairs.push({"1":id, "2":item.v1, "d":item.dist});
            }
        }
    }
    return pairs;
}

const ids = data.vertices.map(item => item.id);
let pairs = get_pairs(ids);
// log(JSON.stringify(pairs, null, 4));

let solver = [];
let v = ids.shift();
solver.push(v);

let v_min = pairs
    .filter(x => x[1] == v)
    // .map(x => log(x));
    .reduce((min, cur) => cur.d < min.d? cur: min);
let v_add = v_min[2];
solver.push(v_add);
log(v, v_min, v_add, solver);


// while (ids.length > 0) {
//     for (let s of solver) {
//         s[1]
//     }
//     let v = ids.shift();
//     solver.push(v);
// }

// log(solver);
