let log = console.log;

log(String.fromCharCode(65));
log("АБВГД".charCodeAt(0));
log("абвгд".charCodeAt(0));

// for (let i = 0; i < 32; i++) {
//     log(String.fromCharCode(1040+i)); 
// }
let start = 1072;
let alph = Array.from({length: 32}, (_, i) => String.fromCharCode(start+i)).join('');
log(alph);
alph = Array(32).fill('').map((_, i) => String.fromCharCode(start+i)).join('');
log(alph);
