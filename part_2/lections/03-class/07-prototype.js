const clients = require("./json/clients.json").clients;

// console.clear();

console.log(1, clients[0]);

let arr = clients

    // .map(obj => { return { "age": obj.age, "name": obj.name} })
    // .map(obj => new Object({ "age": obj.age, "name": obj.name }))
    .map(obj => ({ "age": obj.age, "name": obj.name})) // лаконично

    .filter(elm => elm.age > 27)
    .sort((a,b) => a.age-b.age)
    .toReversed();

console.log(2, arr);

// let data = JSON.stringify(arr, null, 4); // replacer null
// console.log(3, data);
// require('fs').writeFileSync('./json/clients-sort.json', data);

Array.prototype.print = function(sep=' ', cnt=9) {
    console.log('_ '.repeat(cnt));
    const keys = ['ind', ...Object.keys(this[0])];
    console.log(keys.join(sep));
    this.forEach((user, index) => {
        const fields = [index];
        for (let field in user) {
            fields.push(user[field].toString());
        }
        console.log(fields.join(sep));
    });
}

arr.print();
arr.print('\t', 12);
