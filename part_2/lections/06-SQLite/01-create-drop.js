const sqlite3 = require('sqlite3').verbose() // npm install sqlite3
// режим verbose для подробных сообщений об ошибках
// при разработке нужен для отладки и контроля, в production - убрать

const eventCreateDB = (err) => {
    if (err) {
        console.error("Ошибка при открытии/создании базы данных:", err.message)
    } else {
        console.log('Успешно подключено к базе данных.')
    }
}

const eventCreateTable = (err) => {
    if (err) {
        console.error("Ошибка при создании таблицы:", err.message)
    } else {
        console.log("Таблица создана или уже существовала.")
    }
}

const eventCloseDB = (err) => {
    if (err) {
        console.error("Ошибка при закрытии базы данных:", err.message);
    } else {
        console.log("Соединение с базой данных закрыто.");
    }
}

const event = (err) => {
    if (err) {
        console.error("Ошибка:", err.message);
    } else {
        console.log("НЕТ ошибок");
    }
}

// = = = = = = = = = = = = = = 

const createTable = () => {
    let query = ' \
        CREATE TABLE IF NOT EXISTS abiturs ( \
            "id"    INTEGER, \
            "lastName"    TEXT, \
            "rating"    INTEGER, \
            "gender"    INTEGER, \
            "birthDate"    TEXT, \
            "city"    TEXT, \
            PRIMARY KEY("id" AUTOINCREMENT) \
        )'
    db.run(query, (err) => {
        eventCreateTable(err);
        db.close(eventCloseDB);  // закрываем после создания таблицы
    });
}

const dropTable = () => {
    let query = "DROP TABLE IF EXISTS abiturs"
    db.run(query)
    db.close(eventCloseDB)
} // проверить sqlite_sequence - последний добавленный id НЕ хранится

const deleteFromTable = () => {
    let query = "DELETE FROM abiturs WHERE rating = 'error'"
    db.run(query)
    db.close(eventCloseDB)
} // db.run выполнится полностью ДО db.close, это встроено в библиотеку

const deleteAllFromTable = () => {
    let query = "DELETE FROM abiturs"
    db.run(query, (err) => {
        if (err) {
            console.error(err.message)
        } else {
            console.log("Удалены все записи.")
        }
        db.close(eventCloseDB)
    })
} // проверить sqlite_sequence - последний добавленный id хранится

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_test.sqlite3'

// создаем новую базу данных или открываем существующую
// const db = new sqlite3.Database(dbPath) 
const db = new sqlite3.Database(dbPath, eventCreateDB)

// createTable()
// dropTable()
deleteFromTable()
// deleteAllFromTable()