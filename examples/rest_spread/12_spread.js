const user = { name: "Андрей", age: 25 };
const info = { city: "Волгоград", profession: "разработчик"};
const combined = { ...user, ...info };

console.log(combined);