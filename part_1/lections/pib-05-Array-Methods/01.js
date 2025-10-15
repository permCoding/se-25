let users = require('./files/users_str.json');
let log = console.log; 

let res = users.some(ob => +ob.id > 300); // хотя бы один
log(res);

log(users.every(ob => +ob.id > 0));
log(users.every(ob => +ob.id%2));
