const fs = require('fs');


const getLinesFromFile = (filename) => {
    try {
        const content = fs.readFileSync(filename, 'utf8');
        return content.split('\n');
    } catch (err) {
        console.error(err);
        return [];
    }
}

const filename = './files/content.txt';
const lines = getLinesFromFile(filename);
console.log(lines);