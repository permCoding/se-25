const log = console.log;

const f1 = (s) => {
    let ptn = /АБРАКАДАБРА/g;
    for (let match of s.matchAll(ptn)) {
        log(match);
    }
}

const f2 = (s) => {
    let ptn = /АБРАКАДАБРА/g;
    for (let match of s.matchAll(ptn)) {
        log(match[0], match.index);
    }
}

const f3 = (s) => {
    let ptn = /АБРАКАДАБРА/g;
    let matches = s.match(ptn);
    if (matches) { // match - не возвращает позиции
        matches.forEach(match => log(match));
    } // можно добавить else {}
}

const f4 = (s) => {
    const regex = /(?=(АБРАКАДАБРА))/g;
    let matches = s.matchAll(regex);

    for (let match of matches) {
        log(match[1], match.index);
    }
}

const f5 = (s) => {
    const regex = /(?=(АБРАКАДАБРА))/g;
    let matches = s.matchAll(regex);

    let arr = [...matches].map(m => m.index);
    log(arr);
}

const f6 = (s) => {
    const subs = 'АБРАКАДАБРА';
    const regex = new RegExp(`(?=(${subs}))`, 'g');
    let matches = s.matchAll(regex); // итератор

    const arr = Array.from(matches, function(match) { return {
            ind: match.index,
            subs: match[1]
        }
    });

    // const arr = Array.from(matches, match => { return {
    //         ind: match.index,
    //         subs: match[1]
    //     }
    // });

    // const arr = Array.from(matches, match => ({
    //     ind: match.index,
    //     subs: match[1]
    // }));

    log(`вхождений - ${arr.length}`);
    arr.forEach(m => log(m.subs, m.ind));
}

const f7 = (s) => {
    // const regex = /(?=(SOS[0-9]+SOS))/g;
    const regex = /(?=(SOS([0-9]+)SOS))/g;
    let matches = s.matchAll(regex); // итератор

    const arr = Array.from(matches, match => ({
        ind: match.index,
        subs: match[1],
        num: match[2],
    }));

    log(JSON.stringify(arr, null, 2));
}

let s = 'АБРАКАДАБРАКАДАБРАКАДАБРААБРАКАДАБРАКАДАБРА';
// f6(s);

let w = 'SOS1023SOS1024SOSSOS666SOS SOS';
f7(w);

/*
методы .match() и .matchAll() (с флагом g) 
находят только ТРИ вхождения, а их БОЛЬШЕ!

методы .match() и .matchAll() (с флагом g) 
НЕ находят пересекающиеся вхождения, потому что 
после нахождения совпадения поиск продолжается 
с конца этого совпадения, а не со следующего символа.
*/