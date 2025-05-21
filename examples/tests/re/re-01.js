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

let reEmail = /^[^\s@]+@[^\s@]{2,}\.[^\s@]{2,}$/;

arr
    .map(x => x.trim())
    .forEach( 
        email => console.log( reEmail.test(email), email ) 
    );
