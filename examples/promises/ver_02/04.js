const fs = require('fs/promises');
const path = require('path');
const dir = './files';

async function printListFiles() {
    try {
        const items = await fs.readdir(dir);

        const results = [];
        await Promise.all(items.map(async (item) => {
            const itemPath = path.join(dir, item);
            const stat = await fs.stat(itemPath);
            if (stat.isFile()) {
                console.log(item); // тут выводит
                results.push(item); 
            }
        }));
        console.log(results); // тут выводит

    } catch (err) {
        console.error(err);
    }
}

printListFiles();
