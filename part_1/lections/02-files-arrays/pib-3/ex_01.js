function binToDec_(bin) {
    if (bin === '') return 0;
    return binToDec(bin.slice(0, -1)) * 2 + +bin.slice(-1);
}

function binToDec(bin, p = 0) {
    if (bin === '') return 0;
    return binToDec(bin.slice(0, -1), p+1) +  +bin.slice(-1) * 2**p;
}

const toDec = (bin, base=2, p=0) => 
    bin? toDec(bin.slice(0, -1), base, p+1) + +(bin.slice(-1)) * base**p: 0;


console.log(binToDec_('1101'));
console.log(binToDec('1101'));
console.log(toDec('1101'));
console.log(toDec('1101', 2));
console.log(toDec('10', 8));
console.log(toDec('12', 8));
console.log((13).toString(2));



// '1101' => 13(10)
// 1101 2**0
// 110  2**1
// 11   2**2
// 1    2**3
// ''

/*

'1100'(2) => 12(10)
'0101'(2) => 5(10)


binToDec()
octToDec()
hexToDec()
toDec()
getDec()



class BinToDec

*/


// const result = ('') ? '+++': '---';
// console.log(result);