const fs = require('fs/promises');
const path = require('path');
const dir = './files';

async function printListFiles() {
    try {
        const items = await fs.readdir(dir);
        const results = [];

        // создаём промисы:
        const promise0 = fs
            .stat(path.join(dir, items[0]))
            .then(stat => {
                if (stat.isFile()) results.push(items[0]);
            });
        const promise1 = fs
            .stat(path.join(dir, items[1]))
            .then(stat => {
                if (stat.isFile()) results.push(items[0]);
            });
        const promise2 = fs
            .stat(path.join(dir, items[2]))
            .then(stat => {
                if (stat.isFile()) results.push(items[0]);
            });

        const promises = [promise0, promise1, promise2];
        await Promise.all(promises);
        console.log(results); // тут выводит

    } catch (err) {
        console.error(err);
    }
}

printListFiles();
