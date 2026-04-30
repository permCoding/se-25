const sequelize = require('./models/mDataBase');
const Abitur = require('./models/mAbitur');
const abiturs = require('./data/abiturs_dop.json');
const log = console.log;

(async () => {
    try {
        await sequelize.sync({ force: true });
        log('--- Таблица создана');
        
        await Abitur.bulkCreate(abiturs);
        log('--- Данные добавлены');
    } catch (err) {
        console.error(err.message);
    }
})();
