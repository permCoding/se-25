let alp = '0123456789ABCDEF';
let str = 'GHBDRES';

label_01: for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < alp.length; j++) {
        if (str[i] === alp[j]) break label_01;
    }
}
console.log(i.toString().padStart(3, ' '), '=>', str[i]);
console.log(String(j).padStart(3, ' '), '=>', alp[j]);

console.log(('' + j).padStart(3, ' '), '=>', alp[j]);
console.log(`${j}`.padStart(3, ' '), '=>', alp[j]);