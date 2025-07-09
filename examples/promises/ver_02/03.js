const fs = require('fs');
const path = require('path');
const dir = './files';

const callback = (err, items) => {
    if (err) { console.error(err); return; }

    let amount = 0;
    let results = [];
    for (let item of items) {
        let itemPath = path.join(dir, item);
        fs.stat(itemPath, (err, stat) => {
            if (err) { console.error(err); return; }
            if (stat.isFile()) {
                console.log(item); // тут выводит
                results.push(item);
            }
            if (++amount == items.length) {
                console.log(results); // тут выводит
            }
        });
    }
}

fs.readdir(dir, callback);
