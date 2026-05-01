# se-25  

## ORM  

- Object-Relational Mapping - объектно-реляционное отображение,  
которое позволяет работать с базами данных  
через JavaScript-объекты вместо написания SQL-запросов  

Sequelize — это библиотека для Node.js, реализующая паттерн ORM.  
Sequelize предоставляет высокоуровневый JavaScript API для взаимодействия с реляционными базами данных (PostgreSQL, MySQL, SQLite, MariaDB, Microsoft SQL Server).  
Sequelize преобразует вызовы методов в SQL-запросы, позволяет описывать структуру таблиц через модели, управлять связями между сущностями и выполнять валидацию данных на уровне приложения.  

---  

Примеры применения:  

```js
// ===== READ =====
const users = await User.findAll();  // все
const user = await User.findOne({ where: { name: 'Иван' } });
const userById = await User.findByPk(1);
const { count, rows } = await User.findAndCountAll({ limit: 10 });
const userCount = await User.count({ where: { age: { [Op.gt]: 18 } } });
const maxAge = await User.max('age');
const totalSalary = await User.sum('salary');

// ===== CREATE =====
const newUser1 = await User.create({ name: 'Иван', age: 25 });
const newUsers = await User.bulkCreate([
    { name: 'Иван', age: 25 },
    { name: 'Пётр', age: 30 }
]);
const userInstance = User.build({ name: 'Сидор', age: 28 });
await userInstance.save();

// ===== UPDATE =====
await User.update({ age: 26 }, { where: { name: 'Иван' } });
await User.increment('age', { by: 1, where: { name: 'Иван' } });
await User.decrement('age', { by: 1, where: { name: 'Иван' } });

// ===== DELETE =====
await User.destroy({ where: { age: { [Op.lt]: 18 } } });
await User.truncate();  // удалить всё

// ===== С экземпляром =====
const user = await User.findByPk(1);
user.age = 27;
await user.save();

await user.update({ age: 28 });
await user.destroy();
await user.reload();
const plainObject = user.toJSON();
```

---  

Для какой задачи какой метод лучше подойдёт:  

| Метод | Задача |
| ----- | ------ |
| `findByPk()` | Нужен один пользователь по id |
| `findOne()` | Нужен один пользователь по фамилии |
| `findAll()` | Нужны все пользователи из Москвы |
| `findAndCountAll()` | Нужны пользователи + количество страниц |
| `count()` | Нужно только количество (без данных) |
| `create()` | Добавить одного пользователя |
| `bulkCreate()` | Добавить много пользователей (импорт) |
| `update()` | Обновить возраст у всех Ивановых |
| `increment()` | Увеличить рейтинг на 1 |
| `destroy()` на экземпляре | Удалить одного пользователя |
| `destroy()` с `where` | Удалить всех несовершеннолетних |

---  

```js
// Самые частые задачи
await Model.findAll()       // получить все
await Model.findByPk(id)    // найти по id
await Model.findOne({ where: { ... } })  // найти один
await Model.create({ ... }) // создать
await Model.update({ ... }, { where: { ... } }) // обновить
await Model.destroy({ where: { ... } }) // удалить
await Model.count()         // посчитать

// Редкие специфические задачи
await Model.bulkCreate()    // массовое создание
await Model.increment()     // инкремент
await Model.findAndCountAll() // пагинация
```

---  

Если какой-то сложный SQL-запрос или непонятно как его сделать с помощью ORM, то можно так:  

```js
const query = `
    SELECT city, COUNT(*) as count, AVG(rating) as avg_rating
    FROM abiturs
    GROUP BY city
    HAVING COUNT(*) > 1`;
const results = await sequelize
    .query(query, { type: Sequelize.QueryTypes.SELECT });
```  

---  

### CRUD-методы  

#### READ

| Метод | Что делает | Возвращает | Пример |
| ----- | ---------- | ---------- | ------ |
| `findAll()` | Находит все записи, соответствующие условию | Массив объектов (пустой, если нет) | `await User.findAll()` |
| `findOne()` | Находит первую подходящую запись | Объект или `null` | `await User.findOne({ where: { name: 'Иван' } })` |
| `findByPk()` | Находит запись по первичному ключу (обычно id) | Объект или `null` | `await User.findByPk(123)` |
| `findAndCountAll()` | Находит все записи + их количество за один запрос | `{ count: 10, rows: [...] }` | `await User.findAndCountAll({ limit: 5 })` |
| `count()` | Возвращает количество записей | Число | `await User.count({ where: { age: { [Op.gt]: 18 } } })` |
| `max()` | Максимальное значение поля | Число | `await User.max('age')` |
| `min()` | Минимальное значение поля | Число | `await User.min('age')` |
| `sum()` | Сумма значений поля | Число | `await User.sum('salary')` |

---  

#### CREATE  

| Метод | Что делает | Возвращает | Пример |
| ----- | ---------- | ---------- | ------ |
| `create()` | Создаёт одну запись | Объект (созданная запись) | `await User.create({ name: 'Иван', age: 25 })` |
| `bulkCreate()` | Создаёт много записей за раз | Массив объектов | `await User.bulkCreate([{name:'Иван'}, {name:'Петр'}])` |
| `build()` | Создаёт экземпляр (не сохраняет в БД) | Объект (не сохранён) | `const user = User.build({ name: 'Иван' }); await user.save()` |
| `upsert()` | Обновляет, если есть; создаёт, если нет | `[объект, создан(boolean)]` | `await User.upsert({ id: 1, name: 'Иван' })` |

#### UPDATE  

| Метод | Что делает | Возвращает | Пример |
| ----- | ---------- | ---------- | ------ |
| `update()` | Обновляет записи, соответствующие условию | Массив `[количество_изменённых]` | `await User.update({ age: 30 }, { where: { name: 'Иван' } })` |
| `increment()` | Увеличивает значение поля на указанное число | Объект (обновлённая запись) | `await User.increment('age', { by: 1, where: { id: 1 } })` |
| `decrement()` | Уменьшает значение поля на указанное число | Объект (обновлённая запись) | `await User.decrement('age', { by: 1, where: { id: 1 } })` |
| `save()` | Сохраняет изменения экземпляра (после `build()`) | Объект | `user.age = 30; await user.save()` |

#### DELETE  

| Метод | Что делает | Возвращает | Пример |
| ----- | ---------- | ---------- | ------ |
| `destroy()` | Удаляет записи, соответствующие условию | Количество удалённых записей | `await User.destroy({ where: { age: { [Op.lt]: 18 } } })` |
| `truncate()` | Удаляет все записи из таблицы (сбрасывает) | `undefined` | `await User.truncate()` |

#### РАБОТА С ЭКЗЕМПЛЯРОМ (после получения)  

- Эти методы вызываются на объекте, который уже получен из БД:  

| Метод | Что делает | Пример |
| ----- | ---------- | ------ |
| `save()` | Сохраняет изменения | `user.age = 31; await user.save()` |
| `update()` | Обновляет поля и сохраняет | `await user.update({ age: 31 })` |
| `destroy()` | Удаляет эту конкретную запись | `await user.destroy()` |
| `reload()` | Перезагружает данные из БД | `await user.reload()` |
| `toJSON()` | Превращает в обычный объект | `const obj = user.toJSON()` |

---  
