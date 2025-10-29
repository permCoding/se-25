const request = require('sync-request');

require('dotenv').config(); // npm i dotenv

// API ключ (бесплатный) брать на openweathermap.org, нужна регистрация
const API_KEY = process.env.API_KEY_OpenWeather; // замените на свой

const host = 'http://api.openweathermap.org/data/2.5/weather';
let query = `q=Perm&appid=${API_KEY}&units=metric&lang=ru`;

try {
    const response = request('GET', `${host}?${query}`);
    const jsonData = JSON.parse(response.getBody('utf8'));
    const strJSON = JSON.stringify(jsonData, null, 2)
    
    console.log(strJSON);
    require('fs')
        .writeFileSync('./files/openWeather.json', strJSON, 'utf8');

} catch (error) {
    console.error('Ошибка:', error.message);
}

/* файл .env 
- это пример оформления 
- файл не загружается в репозиторий
- в файле пары ключ-значение через =

# а так в файле можно оставлять комменты
PASSWORD=mysecret
API_KEY=12345
API_KEY_OpenWeather=111
GITHUB_TOKEN=222


- или можно просто в - config.json
*/
