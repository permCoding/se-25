let log = console.log;

const getAlphabet = (start=1072) => Array(32)
    .fill('')
    .map((_, i) => String.fromCharCode(start+i))
    .join('');

const getLastName = (amount=10) => {
    let alph = getAlphabet();
    let len = 3 + Math.floor(Math.random()*9);
    return alph[Math.floor(Math.random()*alph.length)].toUpperCase() + 
        Array(len)
            .fill('')
            .map(_ => alph[Math.floor(Math.random()*alph.length)])
            .join('');
}

log(getLastName());
