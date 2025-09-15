const text = "Строка 1\nСтрока 2\r\nСтрока 3\rСтрока 4";

// Разделение по всем вариантам переноса строки
// const lines = text.split(/\r\n|\n|\r/);

// const lines = text.split(/\r?\n|\r/);

const lines = text
    .split(/\r?\n|\r/)
    .filter(line => line.trim() !== '');

console.log(lines);
// Результат: ["Строка 1", "Строка 2", "Строка 3", "Строка 4"]
