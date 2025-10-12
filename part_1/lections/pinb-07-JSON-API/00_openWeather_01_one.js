const request = require('sync-request');
const log = console.log;

require('dotenv').config();
const API_KEY = process.env.API_KEY_OpenWeather;

const city = 'Perm';
const host = 'http://api.openweathermap.org/data/2.5/weather';
let query = `q=${city}&appid=${API_KEY}&units=metric&lang=ru`;

try {
    const response = request('GET', `${host}?${query}`);
    const jsonData = JSON.parse(response.getBody('utf8'));
    // log(JSON.stringify(jsonData, null, 2));

    log(`Погода в ${jsonData.name}:`);
    log(`Температура: ${jsonData.main.temp}°C`);
    log(`Описание: ${jsonData.weather[0].description}`);
    log(`Координаты: ${jsonData.coord.lat}, ${jsonData.coord.lon}`);
} catch (error) {
    console.error('Ошибка:', error.message);
}

/*
Погода в Perm:
Температура: 4.7°C
Описание: переменная облачность
Координаты: 58.0174, 56.2855
*/