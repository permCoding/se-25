const users = require('../json/users.json');
// const fs = require('fs');
// const path = require('path');

// const check = (a, b) => +a.rating - +b.rating;

const getSortedUsers = (field, direct='asc') => {
    // const usersPath = path.join(__dirname, '../json/users.json');
    // const usersData = fs.readFileSync(usersPath, 'utf8');
    // const users = JSON.parse(usersData);

    const d = direct == 'asc'? +1: -1;
    return users.toSorted((a, b) => { 
            if (a[field] < b[field]) return -d;
            if (a[field] > b[field]) return d;
            return 0;
        })
}

const getUsers = () => {
    return [...users];
}

module.exports = {
    getSortedUsers,
    getUsers
};