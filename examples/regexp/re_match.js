const text = "Телефоны: +375 29 123-45-67, +7 (123) 456-78-90";

// const phonePattern = /\+\d{1,3}[\s\(\-]?\d+[\s\)\-]?\d+[\-\s]?\d+/g;
// тут нужно подправить регулярку

const phonePattern = /\+\d[\d\s\(\-\)]+/g;

const phones = text.match(phonePattern);

console.log(phones); // ["+7 (123) 456-78-90", "+375 29 123-45-67"]
