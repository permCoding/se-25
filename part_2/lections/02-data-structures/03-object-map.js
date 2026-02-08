// Отличия Map() от Object
const log = console.log;

// 1. Объект как ключ, что невозможно в Object
const map = new Map();
const keyObj = { id: 1024 };
map.set(keyObj, 'value');
log(map.get(keyObj)); // 'value'

// 2. Размер без `Object.keys().length` - что быстрее
map.set('a', 1).set('b', 2).set('c', 3);
log(map.size); // 4

// 3. Гарантированный порядок
const orderedMap = new Map();
orderedMap.set('c', 3).set('a', 1).set('b', 2);
for (let [k, v] of orderedMap) log(k, v); // c 3, a 1, b 2

// 4. Проверка на наличиие - O(1) - так как реализовано на хеш-таблицах
//    быстрее чем Object.hasOwnProperty в больших коллекциях
log(map.has(keyObj)); // true
log(map.has({})); // false

const obj = { 'id': 1024, 'name': 'Ivan' }
log('id' in obj); // true

const user = { name: 'Иван', age: 30 };
const proto = { role: 'user' };
Object.setPrototypeOf(user, proto);
log();
// только свои свойства
log(user.hasOwnProperty('name')); // true
log(user.hasOwnProperty('role')); // false
log(Object.hasOwn(user, 'role')); // false
// и свои и из прототипа
log('role' in user);               // true

