В Node.js для тестирования часто используется модуль `assert`, который предоставляет различные методы для проверки условий. Вот основные методы объекта `assert`:

### Основные методы:
1. **`assert.ok(value[, message])`**  
   Проверяет, что `value` является истинным (`truthy`). Если нет — выбрасывает `AssertionError`.  
   ```js
   assert.ok(someValue, "Значение должно быть истинным");
   ```

2. **`assert.equal(actual, expected[, message])`**  
   Проверяет нестрогое равенство (`==`).  
   ```js
   assert.equal(5, "5", '5 == "5"');
   ```

3. **`assert.strictEqual(actual, expected[, message])`**  
   Проверяет строгое равенство (`===`).  
   ```js
   assert.strictEqual(5, 5, '5 === 5');
   ```

4. **`assert.deepEqual(actual, expected[, message])`**  
   Проверяет глубокое равенство объектов (рекурсивно, с приведением типов).  
   ```js
   assert.deepEqual({ a: 1 }, { a: 1 }, 'Объекты равны');
   ```

5. **`assert.deepStrictEqual(actual, expected[, message])`**  
   То же, что `deepEqual`, но со строгим сравнением (`===` для всех полей).  
   ```js
   assert.deepStrictEqual({ a: 1 }, { a: 1 }, 'Объекты строго равны');
   ```

6. **`assert.notEqual(actual, expected[, message])`**  
   Проверяет нестрогое неравенство (`!=`).  
   ```js
   assert.notEqual(3, "5", '3 != "5"');
   ```

7. **`assert.notStrictEqual(actual, expected[, message])`**  
   Проверяет строгое неравенство (`!==`).  
   ```js
   assert.notStrictEqual(3, "3", '3 !== "3"');
   ```

8. **`assert.notDeepEqual(actual, expected[, message])`**  
   Проверяет, что объекты не равны по содержимому (с приведением типов).  
   ```js
   assert.notDeepEqual({ a: 1 }, { b: 2 }, 'Объекты не равны');
   ```

9. **`assert.notDeepStrictEqual(actual, expected[, message])`**  
   Аналог `notDeepEqual`, но со строгим сравнением.  
   ```js
   assert.notDeepStrictEqual({ a: 1 }, { a: "1" }, 'Объекты строго не равны');
   ```

10. **`assert.fail([message])`**  
    Принудительно вызывает `AssertionError`.  
    ```js
    assert.fail("Тест не пройден");
    ```

11. **`assert.throws(block[, error][, message])`**  
    Проверяет, что функция `block` выбрасывает ошибку.  
    ```js
    assert.throws(() => { throw new Error("Ошибка"); }, Error, "Должна быть ошибка");
    ```

12. **`assert.doesNotThrow(block[, error][, message])`**  
    Проверяет, что функция `block` не выбрасывает ошибку.  
    ```js
    assert.doesNotThrow(() => {}, "Не должна быть ошибка");
    ```

13. **`assert.rejects(asyncFn[, error][, message])`** (доступно с Node.js 10+)  
    Проверяет, что `asyncFn` (Promise) отклоняется (rejects).  
    ```js
    await assert.rejects(async () => { throw new Error(); }, Error);
    ```

14. **`assert.doesNotReject(asyncFn[, error][, message])`** (доступно с Node.js 10+)  
    Проверяет, что `asyncFn` (Promise) не отклоняется.  
    ```js
    await assert.doesNotReject(async () => {});
    ```

15. **`assert.match(string, regexp[, message])`** (Node.js 13+)  
    Проверяет, что строка соответствует регулярному выражению.  
    ```js
    assert.match("hello", /^hel/, "Строка должна соответствовать regexp");
    ```

16. **`assert.doesNotMatch(string, regexp[, message])`** (Node.js 13+)  
    Проверяет, что строка **не** соответствует регулярному выражению.  
    ```js
    assert.doesNotMatch("world", /^hel/, "Строка не должна соответствовать regexp");
    ```

### Пример использования:  

```javascript
const assert = require('assert');

function add(a, b) {
  return a + b;
}

// Тесты
assert.strictEqual(add(2, 3), 5, "2 + 3 должно быть 5");
assert.throws(() => { add("2", "3"); }, TypeError, "Должна быть ошибка типа");
```

---  

### Альтернативы:  

Если `assert` кажется слишком минималистичным, можно использовать более мощные библиотеки:  

- **`chai`** (удобные `expect`, `should` и `assert` стили),  
- **`jest`** (встроенные матчеры, например, `expect(...).toBe(...)`),  
- **`sinon`** (для моков и стабов).  

Но стандартный `assert` отлично подходит для простых тестов без зависимостей. 🚀