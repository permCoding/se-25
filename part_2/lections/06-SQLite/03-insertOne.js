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
    db.run(queryInsertObject, params, function(err) {
        events.event(err);  // ваш метод, который обрабатывает ошибки
        if (!err) { console.log(`Добавлена запись с ID: ${this.lastID}`) }
        db.close(events.eventCloseDB);
    }); // тут важно именно function(err) - так есть контекст this
}

// = = = = = = = = = = = = = = = 

const dbPath = './data/db_test.sqlite3'
const db = new sqlite3.Database(dbPath)
let abiturs = require('./data/abiturs.json')

// insert(abiturs.at(-3))
// insertObject(abiturs[0])

let newUser = {
    "lastName": "Camus",
    "rating": "207",
    "gender": "1",
    "birthDate": "2001-04-27",
    "city": "Пермь"
} // id формируется автоматически PRIMARY KEY("id" AUTOINCREMENT)
insertObject(newUser)
