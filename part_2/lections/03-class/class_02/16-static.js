// статические свойства и методы
const log = console.log;

class Ork {
    static amount = 0;

    constructor(name) {
        this.name = name;
        Ork.amount_inc();
    }

    static amount_inc() {
        // this.amount++; // this обращается к классу
        Ork.amount++;     // но так нагляднее
    }

    // static del_ork(arr, index) {
    //     delete arr[index]; // НЕ удаляет элемент массива а оставляет undefined
    //     Ork.amount_dec();
    // }

    static del_ork(arr, index) { // удаляет элемент массива
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);  // удаляет элемент и сдвигает массив
            Ork.amount_dec();
            return true;
        }
        return false;
    }

    static amount_dec() {
        if (this.amount > 0) {  // защита от отрицательного кол-ва
            this.amount--;
        }
    }

    static get totalCount() {  // статический геттер
        return Ork.amount;
    }

    toString() { return `Ork: ${this.name}`; }
}

// console.clear();

let names = ["Масяня","Гена","Логан"];
let orks = [];
for (let name of names) {
    orks.push(new Ork(name));
    log(orks.length-1, orks[orks.length-1]);
}

log("- ".repeat(9));
log(`${Ork.totalCount}`);
log(orks); Ork.del_ork(orks, 0); log(orks);
log(`Всего осталось: ${Ork.totalCount}`);

log("- ".repeat(9)); orks.forEach(ork => log(ork));
