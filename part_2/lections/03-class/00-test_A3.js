const dogPrototype = {
    to_speak: function() {
        return this.name + " says Гав-гав!";
    }
}; // Шаг 1: Создаем объект-прототип

// Шаг 2: Создаем новый объект, привязывая его к прототипу
const myDog = Object.create(dogPrototype);
myDog.name = "Бобик";
myDog.to_speak = () => "говорение";

console.log(myDog.to_speak());

delete myDog.to_speak;

console.log(myDog.to_speak());

// важно, если убрать to_speak у myDog
// он найдется в родительском объекте - делегирование

// и вот как в прототипе можно менять что-то:
const ex_01 = (arr) => {
    Array.prototype.print = function(sep=' ', pref='') {
        console.log(`${pref}${this.join(sep)}`);
    }

    arr.print(' ', 'numbers = ');
    arr.print(' ');
    arr.print();
}

const ex_args_01 = (arr) => { // как пропустить агрументы - 01
    Array.prototype.print = function(sep=' ', pref='') {
        console.log(`${pref}${this.join(sep)}`);
    }

    arr.print(undefined, 'args01, numbers = ');
}

const ex_args_02 = (arr) => { // как пропустить агрументы - 02
    Array.prototype.print = function(options = {}) { // через деструктуризацию
        const { sep = ' ', pref = '' } = options;
        console.log(`${pref}${this.join(sep)}`);
    }

    arr.print({ pref: 'args02, nums = ' }); // sep будет по умолчанию ' '
    arr.print({ sep: '-', pref: 'args02, nums = ' });
    arr.print({}); // просто вызов с дефолтами
}

const ex_args_03 = (arr) => { // как пропустить агрументы - 03
    Array.prototype.print = function(sep, pref) { // вручную всё проверить
        if (sep === undefined && pref !== undefined) { sep = ' '; } // дефолтный разделитель
        const separator = sep !== undefined ? sep : ' ';
        const prefix = pref !== undefined ? pref : '';
        console.log(`${prefix}${this.join(separator)}`);
    }

    arr.print(undefined, 'args03, numbers = ');
}

const arr = [12, 34, 56, 78, 90];
ex_01(arr);
ex_args_01(arr);
ex_args_02(arr);
ex_args_03(arr);
