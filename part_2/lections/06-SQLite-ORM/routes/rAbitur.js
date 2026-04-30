const express = require('express');
const router = express.Router();
const controller = require('../controllers/cAbitur');

// маршрутизация

// GET - получение данных
router.get('/users', controller.getAllUsers);
router.get('/top', controller.getTopUsers);
router.get('/users/rating/:min', controller.getUsersByRating);
router.get('/top3', controller.getTop3PerCity);

// PUT - обновление данных
router.put('/user', controller.updateRating);

// DELETE - удаление данных
router.delete('/user/:lastName', controller.deleteUser);

module.exports = router;
