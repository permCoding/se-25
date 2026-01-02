let arr = [
    '  qwerty@mail.com  ',
    'qwe rty@mail.com',
    'qwe-rty@mail.com',
    'qwerty@ma.uk',
    'qwerty@m.uk',
    'qwerty@ma.u',
    'qwerty.ma.uk',
    'qwerty.ma@uk',
];

// ___ ver 1 - литерал регулярного выражения
// let reEmail = /^[^\s@]+@[^\s@]{2,}\.[^\s@]{2,}$/;

// ___ ver 2 - через строку и конструктор new RegExp
// нужно два \\, т.к. в строке \s - это специальный символ
// let ptn = '^[^\\s@]+@[^\\s@]{2,}\.[^\\s@]{2,}$'; // строку можно формировать динамически
// let reEmail = new RegExp(ptn);

// ___ ver 3 - строку можно формировать динамически
let smb = '[^\\s@]';
let ptn = `^${smb}+@${smb}{2,}\.${smb}{2,}$`;
let reEmail = new RegExp(ptn);

arr
    // .map(x => x.trim())  // для контроля
    .forEach( 
        email => console.log( reEmail.test(email), '\t', email ) 
    );
