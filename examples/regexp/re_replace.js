// Удаление лишних пробелов
const messyText = "Много    лишних    пробелов";

const cleanText = messyText.replace(/\s+/g, ' ');

console.log(cleanText);


// = = = = = = 


// Замена дат в формате DD/MM/YYYY на YYYY-MM-DD
const dateText = "Даты: 25/12/2023, 01/01/2024";

const formatted = dateText
    .replace(/(\d{2})\/(\d{2})\/(\d{4})/g, '$3-$2-$1');

console.log(formatted); // "Даты: 2023-12-25, 2024-01-01"
