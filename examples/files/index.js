import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);

readFile(__filename, 'utf-8')
    .then((data) => { console.log(data) });


// import { dirname } from 'node:path';
// // Получаем __dirname для ES-модулей  
// const __dirname = dirname(__filename);
