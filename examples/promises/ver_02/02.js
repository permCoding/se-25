const fs = require('fs');
const path = require('path');
const dir = './files';

const callback = (err, items) => {
    if (err) { console.error(err); return; }

    let results = [];
    for (let item of items) {
        let itemPath = path.join(dir, item);
        fs.stat(itemPath, (err, stat) => {
            if (err) { console.error(err); return; }
            if (stat.isFile()) {
                console.log(item); // тут выводит
                results.push(item);
            }
        });
    }
    console.log(results); // тут пусто так как fs.stat - асинхронный

}

fs.readdir(dir, callback);
