const regex = /([А-ЯЁ])\1+/gi;

const str = `Приииииииивед Мммммедведдддд!`;
const subst = `$1`;

const result = str.replace(regex, subst);

console.log(result);


const newStr = `Пр8ивед М5едвед4!`;