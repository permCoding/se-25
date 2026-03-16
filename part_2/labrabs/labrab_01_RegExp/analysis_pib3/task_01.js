const user = "Иванов Иван Иванович";

// Нумерованные группы: $1 - фамилия, $2 - имя
const re1 = /(\S+)\s+(\S+)\s+\S+/g;
const re2 = /([А-ЯЁ]+)\s+([А-ЯЁ]+)\s+[А-ЯЁ]+/i;

const str = "([А-ЯЁа-яё]+)\s+([А-ЯЁа-яё]+)\s+[А-ЯЁа-яё]+";
const reClass = new RegExp(str, "");

console.log(1, user.replace(re1, "$2 $1"));
console.log(2, user.replace(re2, "$2 $1"));
console.log(3, user.replace(reClass, "$2 $1"));
console.log(4, user.replace(re2, "$& +++ $3"));



const re3 = /(?<lastname>\S+)\s+(?<firstname>\S+)\s+\S+/;
// Именованные группы: $<lastname> - фамилия, $<firstname> - имя
const result = user.replace(5, re3, "$<firstname> $<lastname>");

console.log(result); // Иван Иванов
