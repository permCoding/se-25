let x = 1234;
let PORT = 3000;

const toDec = (bin, base=2, p=0) => 
    bin? toDec(bin.slice(0, -1), base, p+1) + +(bin.slice(-1)) * base**p: 0;

module.exports = {
    toDec,
    PORT
}