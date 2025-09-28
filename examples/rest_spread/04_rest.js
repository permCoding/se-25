const user = {
    firstName: "Андрей",
    age: 21,
    city: "Волгоград",
    profession: "разработчик"
};
   
const { firstName, ...other } = user;

console.log(firstName);
console.log(other);