const sqlite3 = require('sqlite3').verbose()
const { Events } = require('./classEvents')
const events = new Events()

const deleteById = (id, logger) => {
    const queryDeleteById = "DELETE FROM abiturs WHERE id = ?" 
    // ? подставляется из массива [id]
    db.run(queryDeleteById, [id], function(err) {
        if (err) {
            logger(err, {success: false, deleted: 0});
        } else {
            logger(null, {success: true, deleted: this.changes});
        }
        db.close(events.eventCloseDB);
    });
};

const loggerAmountDeleted = (err, result) => {
    if (err) {
        console.log("Ошибка:", err);
    } else {
        console.log(`Результат: удалено ${result.deleted} записей`);
    }
}

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_test.sqlite3'
const db = new sqlite3.Database(dbPath, events.eventCreateDB)

// deleteById(99, loggerAmountDeleted)
deleteById(2, loggerAmountDeleted)
