# Lect-06  

## JSON  

> [стандарт JSON](https://datatracker.ietf.org/doc/html/rfc8259)  

```js
// компактный формат (валидный JSON) - для передачи по сети
{"name":"John","age":30,"city":"New York"}

// удобный формат (валидный JSON) - человекочитаемый
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

- кодировка utf-8  
- отступы: 2 или 4 пробела  
- кавычки двойные "  
- недопустима последняя запятая в перечислении  

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  }
}
```

```js
// НЕВЕРНО (вызовет ошибку парсера)
{
  "a": 1,
  "b": 2,
}
```

## Array methods  

> [habr: JS Array methods](https://habr.com/ru/companies/ruvds/articles/430380/)  

---  

```js
length - field

.of()
.from()

.slice()

.keys()
.values()
.entries()

.map()
.filter()
.reduce()
.forEach()

.includes()
.find()
.findIndex()
.flat()

.sort()
.some()
.every()
```

---  

- как сохранить в файл  
- как прочитать из файла  
- JSON  

---  
