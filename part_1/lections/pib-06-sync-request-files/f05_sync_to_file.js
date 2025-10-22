const syncRequest = require('sync-request');
const fs = require('fs');

function downloadAndSaveSync(url, filename) {
    try {
        console.log(`Загрузка ${url}...`);
        
        const response = syncRequest('GET', url);
        
        if (response.statusCode !== 200) {
            throw new Error(`Ошибка HTTP: ${response.statusCode}`);
        }
        
        const content = response.getBody('utf8');
        
        // Сохраняем в файл синхронно
        fs.writeFileSync(filename, content, 'utf8');
        console.log(`Файл сохранен как: ${filename}`);
        
        // Читаем сохраненный файл построчно
        const savedContent = fs.readFileSync(filename, 'utf8');
        const lines = savedContent.split('\n');
        
        return lines;
        
    } catch (error) {
        console.error('Ошибка:', error.message);
        return [];
    }
}

// Использование
const lines = downloadAndSaveSync(
    'http://pcoding-ru.1gb.ru/csv/17.txt',
    './files/downloaded_file.txt'
);

console.log(`Получено строк: ${lines.length}`);