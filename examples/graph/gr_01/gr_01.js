Math.sum = (arr) => arr.reduce((a, b) => a + b, 0);
// добавим к объекту Math функцию вычисл суммы массива

const log = console.log;
const data = require('./gr_01.json');

const get_pairs = (ids) => {
    let pairs = [];
    for (let id of ids) {
        for (let item of data.edges) {
            if (item.v1 == id) { 
                pairs.push({"v1":id, "v2":item.v2, "dist":item.dist}); 
            }
            if (item.v2 == id) { 
                pairs.push({"v1":id, "v2":item.v1, "dist":item.dist});
            }
        }
    }
    return pairs;
}

let ids = data.vertices.map(item => item.id);
let pairs = get_pairs(ids);

let solver_ids = [], solver_prs = [];

let v = ids.shift();
solver_ids.push(v);

let v_min = pairs
    .filter(x => x.v1 == v)
    .reduce((min, cur) => cur.dist < min.dist? cur: min);
ids = ids.filter(x => x != v_min.v2);
solver_prs.push(v_min);
solver_ids.push(v_min.v2);

log(solver_ids, solver_prs, ids);

while (ids.length > 0) {
    let solvers_for_v = [];
    for (let id1 of solver_ids) {
        let v_min = pairs
            .filter(x => ((x.v1 == id1) && (ids.includes(x.v2))))
            .reduce((min, cur) => cur.dist < min.dist? cur: min);
        solvers_for_v.push(v_min)
    }
    v_min = solvers_for_v
        .reduce((min, cur) => cur.dist < min.dist? cur: min);
    ids = ids.filter(x => x != v_min.v2);
    solver_prs.push(v_min);
    solver_ids.push(v_min.v2);
}

log(solver_prs);
log(solver_prs.reduce((a,b) => a + b.dist, 0));
log(Math.sum(solver_prs.map(x => x.dist)));
