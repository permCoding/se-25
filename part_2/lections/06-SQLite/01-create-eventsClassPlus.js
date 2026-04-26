const sqlite3 = require('sqlite3').verbose() // npm install sqlite3
const { Events } = require('./classEvents')
const events = new Events()

// = = = = = = = = = = = = = = 
const queryCreateTable = `
    CREATE TABLE IF NOT EXISTS abiturs ( 
        "id"    INTEGER, 
        "lastName"    TEXT, 
        "rating"    INTEGER, 
        "gender"    INTEGER, 
        "birthDate"    TEXT, 
        "city"    TEXT, 
        PRIMARY KEY("id" AUTOINCREMENT) 
    )`
const queryDropTable = "DROP TABLE IF EXISTS abiturs"
const queryDeleteFromTable = "DELETE FROM abiturs WHERE rating = 'error'"
const queryDeleteById = "DELETE FROM abiturs WHERE id = 26"
// = = = = = = = = = = = = = = = 

const runQuery = (query, handleError) => {
    db.run(query, (err) => {
        handleError(err)
        db.close(events.eventCloseDB)
    })
}

const dbPath = './data/db_test.sqlite3'
const db = new sqlite3.Database(dbPath, events.eventCreateDB)

// runQuery(queryCreateTable, events.eventCreateTable)
// runQuery(queryDropTable, events.event)
// runQuery(queryDeleteFromTable, events.event)
runQuery(queryDeleteById, events.event)
