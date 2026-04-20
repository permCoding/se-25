const { getSortedUsers, getUsers } = require('../models/mUsers');

const getModel = (req) => {
    return { 
        field: req.body?.field ?? '', 
        direct: req.body?.direct ?? '',
        limit: req.body.limit || 190,
        arrayUsers: []
    };
}

const orderUsers = (req, res) => {
    const model = getModel(req);
    model.arrayUsers = getSortedUsers(model.field, model.direct);
    res.render('vUsers', model);
};

const mainUsers = (req, res) => {
    const model = getModel(req);
    model.arrayUsers = getUsers();
    res.render('vUsers', model);
};

module.exports = {
    mainUsers,
    orderUsers
};

/*
?. - опциональная цепочка, безопасный доступ к свойству, если req.body undefined
?? - nullish coalescing, значение по умолчанию, только если левая часть null или undefined
*/