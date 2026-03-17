const fs = require('fs');
const readline = require('readline');

function test_way01() {
    fs
        .readFileSync('../sem_02_labrab_01.csv', 'utf-8') // './sem_02_labrab_01_test.csv'
        .split(/\r\n|\n/)
        .forEach((line, index) => {
            const nums = line.trim().split(' ').map(Number);
            const allOdd = nums.every(n => n % 2);
            const allDistinct = new Set(nums).size === nums.length;
            
            // const isSorted = nums.toString() === nums.toSorted((a,b) => a-b).toString();
            // const isSorted = nums.toSorted((a,b) => a-b).every((val, ind) => val === nums[ind]);
            const isSorted = nums.every((num, ind) => ind === 0 || num > nums[ind-1]); // fastest 1 2 3 ?
            // > or >= - так как все различны, то >
            if (allOdd && allDistinct && isSorted) { 
                console.log(index+1);
            }
        })
}


function task01_way01() {
    console.time('FullLoad');
    fs
        .readFileSync('../sem_02_labrab_01.csv', 'utf-8') // './sem_02_labrab_01_test.csv'
        .split(/\r\n|\n/)
        .forEach((line, index) => {
            const nums = line.trim().split(' ').map(Number);
            const allOdd = nums.every(n => n % 2);
            const allDistinct = new Set(nums).size === nums.length;
            
            // const isSorted = nums.toString() === nums.toSorted((a,b) => a-b).toString();
            const isSorted = nums.toSorted((a,b) => a-b).every((val, ind) => val === nums[ind]);
            // const isSorted = nums.toSorted((a,b) => a-b).every((value, index) => value === nums[index]);

            // const isSorted = nums.every((num, ind) => ind === 0 || num > nums[ind-1]);
            if (allOdd && allDistinct && isSorted) { 
                console.log(index+1);
            }
        })
        console.timeEnd('FullLoad');
    
    const memUsage = process.memoryUsage(); // мониторинг расходов памяти
    console.log('FullLoad Memory:', Math.round(memUsage.heapUsed / 1024 / 1024) + 'MB');
}

async function task01_way02() {
    console.time('Stream');
    const rl = readline.createInterface({
        input: fs.createReadStream('../sem_02_labrab_01.csv', { encoding: 'utf-8' }) 
                // или 'windows-1251'     // 'sem_02_labrab_01_test.csv'
    });
    let lineNum = 1;
    for await (const line of rl) {
        const nums = line.trim().split(' ').map(Number);
        const allOdd = nums.every(n => n % 2);
        const allDistinct = new Set(nums).size === nums.length;
        const isSorted = nums.every((num, ind) => ind === 0 || num > nums[ind-1]);
        if (allOdd && allDistinct && isSorted) { 
            console.log(lineNum);
        }
        lineNum++;
    }
    console.timeEnd('Stream');
    
    const memUsage = process.memoryUsage(); // мониторинг расходов памяти
    console.log('Stream Memory:', Math.round(memUsage.heapUsed / 1024 / 1024) + 'MB');
}


// test_way01();
task01_way01();
task01_way02();

/*
я сделал большой файл с данными на 7.3 MByte и 
402_000 строк с данными и сделал замеры:
- way01
FullLoad: 713.544ms
FullLoad Memory: 42MB
- way02
Stream: 1.007s
Stream Memory: 10MB

* подход 1 - readFileSync - полная загрузка в память сразу всего файла

Плюсы:
- Максимальная скорость для небольших файлов до 100-200 МБ
- Простой код - всё доступно сразу
- Удобная работа с данными (можно легко вернуться к любой строке)

Минусы:
- Огромное потребление памяти - весь файл загружается в RAM
- Риск падения при больших файлах (может не хватить памяти)
- Задержка перед началом обработки - нужно загрузить весь файл


* подход 2 - async + Stream + Readline - построчное чтение в память

Плюсы:
- Низкое потребление памяти - файл читается частями (буферами), в памяти хранится только текущая строка
- Масштабируемость - можно обрабатывать файлы любого размера (хоть 100 ГБ)
- Ранний старт обработки - первая строка обрабатывается сразу, не нужно ждать загрузки всего файла

Минусы:
- Немного сложнее программный код
- Дополнительные небольшие накладные расходы на управление потоками и буферизацию
  - для небольших файлов занимает больше памяти, чем при подходе 1
- работает медленнее


Можно вот так сравнить эти подходы:
по скорости - подход 1 быстрее (~ 30%)
по памяти   - подход 2 расходует меньше памяти
по макс разм файла - подход 1 ограничен RAM, подход 2 не ограничен
по времени до первой строки - подход 1 быстрее

рекомендация примерная:
- если файл до 100 МБ - подход 1 с полной загрузкой будет быстрее
- если файл более 100 МБ - построчное чтение эффективнее
- если файл неизвестного размера - построчное чтение безопаснее
*/