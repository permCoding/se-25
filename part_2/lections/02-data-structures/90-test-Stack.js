const log = console.log;

const isValid = (str) => {
    const stack = []; // стек из массива

    for (let chr of str) {
        if (chr === '(') {
            stack.push(chr);
            continue;
        }

        if (stack.length == 0) return false; // нет открывающей
        const top = stack.pop(); // берём вершину стека 
        if (top != '(') return false; // и проверяем парность
    }

    return stack.length == 0; // стек пуст?
}

// Тесты
log(isValid("()"));     // true
log(isValid("()()()")); // true
log(isValid("(())()")); // true
log(isValid("()))"));   // false
log(isValid("((("));    // false
log(isValid("("));      // false
log(isValid(")"));      // false

/*
можно сделать в виде задачи для самостоятельного исполнения
1) сделать класс Stack() - реализовать методы: 
   - push() - добавить на вершину Стека
   - pop() - снять с вершины Стека
   - peek() - посмотреть вершину Стека, не снимать
   - isEmpty() - проверить, пуст ли стек?
2) усложнить скобочную последовательность:
   - добавить скобки, всего такие: (), [], {}
   - добавить в проверяемые строки числа и знаки действий и пробелы
   - реализовать проверку на правильность расстановки скобок с такими условиями
*/