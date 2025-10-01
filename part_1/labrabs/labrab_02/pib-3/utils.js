const toDec = (number, base=2, p=0) => {
    if (number) {
        return toDec(number.slice(0, -1), base, p+1) + +(number.slice(-1)) * base**p;
    } else {
        return 0;
    }
}

const getLines = filename => 
    require('fs')
        .readFileSync(filename, 'utf-8')
        .split(/\n|\r\n/)
        .filter(line => line)
        .slice(1,)
        .map(line => line.split(' '))
        .map(arr => `${arr[0]} ${toDec(arr[2], +arr[1])}`);

module.exports = {
    getLines,
    toDec
}
