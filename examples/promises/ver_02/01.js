const fs = require('fs');
const dir = './files';

const callback = (err, files) => {
    if (err) { console.error(err); return; }
    console.log(files);
}

fs.readdir(dir, callback);
