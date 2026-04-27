const sqlite3 = require('sqlite3').verbose()
const { Events } = require('./classEvents')
const events = new Events()

const select = (query, params) => {
    db.serialize(() => {
        db.all(query, params, (err, rows) => {
            console.table(rows)
            console.log("Общее количество записей:", rows.length)
        })
        db.close()
    })
}

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_test.sqlite3'
const db = new sqlite3.Database(dbPath)

let querySelectAll = `SELECT * FROM abiturs`
let queryRating = `SELECT * 
    FROM abiturs 
    WHERE rating > :rating AND gender = true 
    ORDER BY city ASC, rating DESC`
let queryLimit = `SELECT * FROM (
        SELECT *,
        ROW_NUMBER() OVER (PARTITION BY city ORDER BY rating DESC) AS rn
        FROM abiturs
    ) 
    WHERE rn <= :limit
    ORDER BY city ASC, rating DESC`


select(querySelectAll, [])
// select(queryRating, {":rating":190})
// select(queryLimit, {":limit":20})
// select(queryLimit, {":limit":2})  // из каждого города по 2 лучших