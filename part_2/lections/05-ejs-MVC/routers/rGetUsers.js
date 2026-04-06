const { getUsers } = require('../models/model');

const router = require('express').Router();

router.use((req, res, next) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    next();
});

router.get('/', (req, res) => {
    res.render('users-04', getUsers());
});

module.exports = router;
