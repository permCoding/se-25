const user = "Иванов Иван Иванович";

// Нумерованные группы: $1 - фамилия, $2 - имя

const str1 = "([А-ЯЁа-яё]+)\\s+([А-ЯЁа-яё]+)\\s+[А-ЯЁа-яё]+";
const str2 = String.raw`([А-ЯЁа-яё]+)\s+([А-ЯЁа-яё]+)\s+[А-ЯЁа-яё]+`;

const re = new RegExp(str2, "");
console.log(user.replace(re, "$2 $1"));

let v = '[А-ЯЁ]';
const str3 = `(${v}+)\\s+(${v}+)\\s+${v}+`;

console.log(str3);
const re_ = new RegExp(str3, "i");
console.log(user.replace(re_, "$2 $1"));

