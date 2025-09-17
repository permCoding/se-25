const { toDec } = require('./utils_old');

const getLines = filename => 
    require('fs')
        .readFileSync(filename, 'utf-8')
        .split(/\n|\r\n/)
        .filter(line => line)
        .slice(1,)
        .map(line => line.split(' '))
        .map(arr => `${arr[0]} ${toDec(arr[2], +arr[1])}`);

module.exports = {
    getLines
}
