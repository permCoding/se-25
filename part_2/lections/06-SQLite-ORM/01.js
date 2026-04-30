const sequelize = require('./models/mDataBase');
const Abitur = require('./models/mAbitur');
const log = console.log;


async function createTable() { // создать таблицу в БД
    await sequelize.sync({ force: true }); // true — удалит таблицу, если была, и создаст заново
} // sync - встроенный метод - синхронизировать модель с БД


async function addRecords(abiturs) { // добавить данные в таблицу
    await Abitur.bulkCreate(abiturs);
} // bulkCreate() - встроенный метод - создать множество записей


const main = async () => {
    try {
        await createTable();
        log('--- Таблица создана');

        await addRecords(require('./data/abiturs_dop.json'));
        log('--- Данные добавлены');
    } catch (err) {
        console.error(err);
    }
}


main();
