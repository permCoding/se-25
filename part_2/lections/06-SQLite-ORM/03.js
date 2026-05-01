const { Sequelize } = require('sequelize');
const sequelize = require('./models/mDataBase');
const Abitur = require('./models/mAbitur');
const log = console.log;


async function readAllRecords() { // все данные из таблицы
    const users = await Abitur.findAll(); // встроенный метод
    return users;
}

async function readRecordByRating(limit=200) { // данные по условию
    const topUsers = await Abitur.findAll({
        where: {
            rating: { [Sequelize.Op.gt]: limit }  // rating > limit
        },
        order: [['rating', 'DESC']]
    });
    return topUsers;
}

async function updateRatingByLastName(lastName, newRating) {
    await Abitur.update(
        { rating: newRating },
        { where: { lastName: lastName } }
    );
}

async function findRecordByLastName(lastName) {
    return await Abitur.findOne({ where: { lastName: lastName } });
}

async function deleteRecordByLastName(lastName) {
    await Abitur.destroy({ where: { lastName: lastName } });
}

async function findTopByRating(limit=1) {
    const usersTop = await Abitur.findAll({
        order: [['rating', 'DESC']],
        limit: limit
    });
    return usersTop;
}

async function findRatingByCity() {
    const query = `
        SELECT city, COUNT(*) as count, AVG(rating) as avg_rating
        FROM abiturs
        GROUP BY city
        HAVING COUNT(*) > 1`;
    const results = await sequelize
        .query(query, { type: Sequelize.QueryTypes.SELECT });
    return results;
}

async function main() {
    try {
        await sequelize.authenticate(); // проверка подключения


        const users = await readAllRecords();
        console.table(users.map(u => u.toJSON()));
        log(`Всего записей: ${users.length}`);


        let limitRating = 220;
        let usersByLimit = await readRecordByRating(limitRating);
        log(`--- Рейтинг > ${limitRating}:`);
        console.table(usersByLimit.map(u => ({ lastName: u.lastName, rating: u.rating })));


        await updateRatingByLastName('Иванов', 252);
        await deleteRecordByLastName('Козлова');

        // ['Иванов', 'Козлова', 'Сидоров']
        //     .forEach(async lastName => {
        //         const findUser = await findRecordByLastName(lastName);
        //         if (!findUser) {
        //             log(`--- Запись не найдена: ${lastName}`);
        //         } else {
        //             log(`--- Найдена запись: ${lastName}, рейтинг: ${findUser.rating}`);
        //         }
        // });
        // forEach() не ждёт выполнения асинхронных функций, 
        // запусает все и идёт дальше, не дожидаясь результата.

        for (let lastName of ['Иванов', 'Козлова', 'Сидоров']) {
            const findUser = await findRecordByLastName(lastName);
            if (!findUser) {
                log(`--- Запись не найдена: ${lastName}`);
            } else {
                log(`--- Найдена запись: ${lastName}, рейтинг: ${findUser.rating}`);
            }
        }

        const topUsers = await findTopByRating(); // можно установить сколько
        log("findTopByRating -", JSON.stringify(topUsers, null, 2));

        const r = await findRatingByCity();
        log("findRatingByCity -", JSON.stringify(r, null, 2));
    } catch (error) {
        log(error.message);
    }
}

main();
