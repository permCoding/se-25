const sqlite3 = require('sqlite3').verbose()
const { Events } = require('./classEvents')
const events = new Events()

const queryInsert = `INSERT INTO abiturs \
    ("lastName", "rating", "gender", "birthDate", "city") \ 
    VALUES (?, ?, ?, ?, ?)`  // запрос с параметрами ?

const insert = (obj) => { // поэтому параметры в массиве
    let params = [obj.lastName, obj.rating, obj.gender, obj.birthDate, obj.city]
    db.run(queryInsert, params, (err) => {
        events.event(err);  // ваш метод, который обрабатывает ошибки
        db.close(events.eventCloseDB);
    });
}

const queryInsertObject = `INSERT INTO abiturs \
    ("lastName", "rating", "gender", "birthDate", "city") \ 
    VALUES (:lastName, :rating, :gender, :birthDate, :city)`  // запрос с ИМЕНОВАННЫМИ параметрами

const insertObject = (obj) => {
    let params = { // формируем объект
        ':lastName': obj.lastName,
        ':rating': obj.rating,
        ':gender': obj.gender,
        ':birthDate': obj.birthDate,
        ':city': obj.city
    };
    db.run(queryInsertObject, params, (err) => {
        events.event(err);  // ваш метод, который обрабатывает ошибки
        db.close(events.eventCloseDB);
    });
}

const insertMany = (arrayObj) => {
    db.serialize(function() {
        db.run("BEGIN TRANSACTION") // одна транзкация на все записи
        try {
            for (let obj of arrayObj) {
                let params = [obj.lastName, obj.rating, obj.gender, obj.birthDate, obj.city];
                db.run(queryInsert, params, err => {if (err) throw err;});
            }
            db.run("COMMIT");
        } catch (error) { // при ошибке откатываем всё
            db.run("ROLLBACK");
            console.error("Ошибка при вставке:", error);
        }
        db.close()
    })
}

const insertManyStmt = (arrayObj) => {
    db.serialize(() => {
        db.run("BEGIN TRANSACTION");
        
        const stmt = db.prepare(queryInsert);  // подготовленный запрос быстрее работает
        for (let obj of arrayObj) {
            let params = [obj.lastName, obj.rating, obj.gender, obj.birthDate, obj.city];
            stmt.run(params);
        }
        stmt.finalize();
        
        db.run("COMMIT", (err) => {
            if (err) {
                db.run("ROLLBACK");
                console.error("Ошибка коммита:", err);
            } else {
                console.log(`Добавлено ${arrayObj.length} записей`);
            }
            db.close();
        });
    });
}

const select = (params) => {
    let query = `SELECT * 
        FROM abiturs 
        WHERE rating > :rating AND gender = true 
        ORDER BY city ASC, rating DESC`
    db.serialize(() => {
        db.all(query, params, (err, rows) => {
            console.table(rows)
            console.log(rows.length)
        })
        db.close()
    })
}

const selectLimit = (params) => {
    let query = `SELECT * FROM (
            SELECT *,
            ROW_NUMBER() OVER (PARTITION BY city ORDER BY rating DESC) AS rn
            FROM abiturs
        ) 
        WHERE rn <= :limit
        ORDER BY city ASC, rating DESC`
    db.serialize(() => {
        db.all(query, params, (err, rows) => {
            console.table(rows)
        })
        db.close()
    })
}

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_test.sqlite3'
const db = new sqlite3.Database(dbPath)
let abiturs = require('./data/abiturs.json')

// console.log(abiturs);

// insert(abiturs.at(-3))
// insertObject(abiturs[0])
// insertMany(abiturs)
// insertManyStmt(abiturs)
// select({":rating":190})
// selectLimit({":limit":20})
selectLimit({":limit":2})