const fs = require('fs');
// const fs = require('fs/promises');
const path = './files';

async function listFiles() {
    try {
        const files = await fs.readdir(path);
        console.log('Файлы в директории:', files);
    } catch (err) {
        console.error(err);
    }
}

console.log('start');
listFiles();
console.log('stop');
