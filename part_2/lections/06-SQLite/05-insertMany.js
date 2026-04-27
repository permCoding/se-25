const sqlite3 = require('sqlite3').verbose()

const queryInsert = `INSERT INTO abiturs \
    ("lastName", "rating", "gender", "birthDate", "city") \ 
    VALUES (?, ?, ?, ?, ?)`

const insertMany = (arrayObj) => {
    db.serialize(() => {
        db.run("BEGIN TRANSACTION") // одна транзкация на все записи
        try {
            for (let obj of arrayObj) {
                let params = [obj.lastName, obj.rating, obj.gender, obj.birthDate, obj.city];
                db.run(queryInsert, params, err => {if (err) throw err;});
            }
            db.run("COMMIT");
            console.log(`Добавлено ${arrayObj.length} записей`);
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
        try {
            const stmt = db.prepare(queryInsert);  // подготовленный запрос быстрее работает
            for (let obj of arrayObj) {
                let params = [obj.lastName, obj.rating, obj.gender, obj.birthDate, obj.city];
                stmt.run(params);
            }
            stmt.finalize();
            
            db.run("COMMIT", (err) => {
                if (err) {
                    db.run("ROLLBACK"); // при ошибке откатываем всё
                    console.error("Ошибка коммита:", err);
                } else {
                    console.log(`Добавлено ${arrayObj.length} записей`);
                }
                db.close();
            });
        } catch (error) {
            console.error("Ошибка при вставке:", error);
        }
    });
}

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_test.sqlite3'
const db = new sqlite3.Database(dbPath)
let abiturs = require('./data/abiturs.json')

insertMany(abiturs)
// insertManyStmt(abiturs)
