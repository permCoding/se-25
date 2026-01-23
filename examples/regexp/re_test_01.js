const log = console.log;

const emails = 
    [
        "ex.am.ple.em.ail@mail.com", 
        ".exampleemail@mail.com"
    ];

const re1 = /^([^\.]+[a-z\.]{1,}[^\.]+)@([a-z]{2,}\.[a-z]{2,})$/i;

log(1, emails.filter(e => re1.test(e)));

let ptn = '^([^\.]+[a-z\.]{1,}[^\.]+)@([a-z]{2,}\.[a-z]{2,})$';
let re2 = new RegExp(ptn, 'i');
log(2, emails.filter(e => re2.test(e))); 
