const { Op, literal } = require('sequelize');
const Abitur = require('../models/mAbitur');


const getAllUsers = async (req, res) => {
    const users = await Abitur.findAll();
    res.json(users);
}; // всех пользователей


const getTopUsers = async (req, res) => {
    const users = await Abitur.findAll({
        order: [['rating', 'DESC']],
        limit: 5
    });
    res.json(users);
}; // топ-5 по рейтингу


const getUsersByRating = async (req, res) => {
    const minRating = req.params.min || 220;
    const users = await Abitur.findAll({
        where: { rating: { [Op.gt]: minRating } },
        order: [['rating', 'DESC']]
    });
    res.json(users);
}; // пользователей с рейтингом выше заданного


const getTop3PerCity = async (req, res) => {
    const top3PerCity = await Abitur.findAll({
        attributes: [
            'city',
            'lastName',
            'rating',
            [literal('ROW_NUMBER() OVER (PARTITION BY city ORDER BY rating DESC)'), 'rn']
        ],
        order: [['city', 'ASC'], ['rating', 'DESC']]
    });

    // Группируем по городам (топ-3)
    const groupedByCity = {};
    top3PerCity.forEach(row => {
        const city = row.city;
        if (!groupedByCity[city]) groupedByCity[city] = [];
        if (groupedByCity[city].length < 3) {
            groupedByCity[city].push({ lastName: row.lastName, rating: row.rating });
        }
    });

    res.json(groupedByCity);
}; // топ-3 по городам


const updateRating = async (req, res) => {
    const { lastName, newRating } = req.body;
    await Abitur.update(
        { rating: newRating },
        { where: { lastName } }
    );
    res.json({ message: `Рейтинг ${lastName} обновлён до ${newRating}` });
}; // Обновить рейтинг пользователя


const deleteUser = async (req, res) => {
    const { lastName } = req.params;
    const deleted = await Abitur.destroy({ where: { lastName } });
    if (deleted) {
        res.json({ message: `${lastName} удалён` });
    } else {
        res.status(404).json({ message: `${lastName} не найден` });
    }
}; // Удалить пользователя

module.exports = {
    getAllUsers,
    getTopUsers,
    getUsersByRating,
    getTop3PerCity,
    updateRating,
    deleteUser
};
