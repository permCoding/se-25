const log = console.log;
const data = require('./gr_01.json');

const get_pairs = () => {
    const ids = data.vertices.map(item => item.id);
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

log(get_pairs());
// log(JSON.stringify(pairs, null, 4));
