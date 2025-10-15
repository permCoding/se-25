let log = console.log;

const getRndInt = (num) => Math.floor(Math.random()*num);

const getAlphabet = (start=1072) => Array(32)
    .fill('')
    .map((_, i) => String.fromCharCode(start+i))
    .join('');

const getLastName = () => {
    let alph = getAlphabet();
    let len = 2 + Math.floor(Math.random()*10);
    return alph[getRndInt(alph.length)].toUpperCase() + 
        Array(len)
            .fill('')
            .map(() => alph[getRndInt(alph.length)])
            .join('');
}

const getAvg = () => 2 + getRndInt(30)/10;

const getObj = (i) => { 
    return {
        "id": i+1,
        "lastName": getLastName(),
        "avg": getAvg()
    }
}

// const getArray = (amount=10) => Array(amount)
//     .fill(0)
//     .map((v, i) => getObj(i));

const getArray = (amount=10) => Array
    .from({length: amount}, (v, i) => getObj(i));

// log(JSON.stringify(getArray(1), ['id','avg'], 4));

let strJSON = JSON.stringify(getArray(), null, 4);
require('fs')
    .writeFileSync('./files/students.json', strJSON, 'utf-8');



