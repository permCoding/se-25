const sqlite3 = require('sqlite3').verbose() // npm install sqlite3
const { Events } = require('./classEvents')
const events = new Events()

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
        events.eventCreateTable(err)
        db.close(events.eventCloseDB)  // закрываем после создания таблицы
    })
}

const dropTable = () => {
    let query = "DROP TABLE IF EXISTS abiturs"
    db.run(query, (err) => {
        events.event(err)
        db.close(events.eventCloseDB)
    })
}

const deleteFromTable = () => {
    let query = "DELETE FROM abiturs WHERE rating = 'error'"
    db.run(query, (err) => {
        events.event(err)
        db.close(events.eventCloseDB)
    })
} // db.run выполнится полностью ДО db.close, это встроено в библиотеку

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_test.sqlite3'

// создаем новую базу данных или открываем существующую
// const db = new sqlite3.Database(dbPath) 
const db = new sqlite3.Database(dbPath, events.eventCreateDB)

createTable()
// dropTable()
// deleteFromTable()