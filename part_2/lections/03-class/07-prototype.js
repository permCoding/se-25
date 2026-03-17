const clients = require("./json/clients.json").clients;
const log = console.log;

const ex_01 = () => {
    log(1, clients[0]);

    let arr = clients
        .map(obj => { return { "age": obj.age, "name": obj.name} })
        // .map(obj => new Object({ "age": obj.age, "name": obj.name }))
        // .map(obj => ({ "age": obj.age, "name": obj.name})) // лаконично

        .filter(elm => elm.age > 27)
        .toSorted((a,b) => a.age-b.age)
        .toReversed();

    log(2, arr);

    // let data = JSON.stringify(arr, null, 4); // replacer null
    // log(3, data);
    // require('fs').writeFileSync('./json/clients-sort.json', data);

    Array.prototype.print = function(sep=' ', cnt=9) {
        log('_ '.repeat(cnt));
        const keys = ['ind', ...Object.keys(this[0])];
        log(keys.join(sep));
        this.forEach((user, index) => {
            const fields = [index];
            for (let field in user) {
                fields.push(user[field].toString());
            }
            log(fields.join(sep));
        });
    }

    arr.print();
    arr.print('\t', 12);

    Object.prototype.getNameAge = function() {
        if (this.age && this.name) {
            return `${this.name} => ${this.age}`;
        }
    }

    arr.forEach(elm => log(elm.getNameAge()));
}

const ex_02 = () => {   
    const str = 'JS';
    log(str[0], str[1], str[2], str[3]);
    String.prototype[3] = 'JavaScript';
    log(str[0], str[1], str[2], str[3]);
    log(str.length);
    log(str);
    log(Object.entries(str));
    log(Object.keys(str));
    log(Object.getNameAge.toString());
}

ex_01();
// ex_02();

// Object.prototype - самый базовый, 
// поэтому будет найден делегированием из любого дочернего объекта