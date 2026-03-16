const log = console.log;
const fs = require("fs");

const ex_01 = () => {
    const nums = text.match(/[1-9A-F][0-9A-F]*/g) || [];
    const even = nums.filter(n => /[02468ACE]$/.test(n));
    const maxLen = Math.max(...even.map(n => n.length));
    const longest = even.filter(n => n.length === maxLen);
    const max = longest.reduce((a, b) =>
        parseInt(a, 16) > parseInt(b, 16) ? a : b);

    log("Максимальное число:", max); // 4E20A0503ECE7060F0E8640
}

const ex_02 = () => { // без перевода строки в число
    const nums = text.match(/[1-9A-F][0-9A-F]*[02468ACE]/g);
    const check = (a, b) => {
        if (b.length>a.length) return b;
        if (b.length<a.length) return a;
        return a>b? a: b;
    }
    const max = nums.reduce(check, '');

    log("Максимальное число:", max); // 4E20A0503ECE7060F0E8640
}


const text = fs.readFileSync("../task_03.txt", "utf8");
ex_01(text);
ex_02(text);
