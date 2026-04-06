const users = require('../json/users.json');

const getSortedUsers = (field, direct='asc') => {
    const d = direct == 'asc'? +1: -1;
    return { 
        "arrayUsers": [...users]
            .sort((a, b) => a[field]>b[field]? d: -d)
    };
}

const getUsers = () => {
    return { 
        "arrayUsers": [...users]
    };
}

module.exports = {
    getSortedUsers,
    getUsers
};