const request = require('sync-request');
const log = console.log;

// API ключ бесплатный брать на openweathermap.org - нужна регистрация
const API_KEY = ''; // Замените на свой
const city = 'Perm';
const host = 'http://api.openweathermap.org/data/2.5/weather';
let query = `q=${city}&appid=${API_KEY}&units=metric&lang=ru`;
let url = `${host}?${query}`;

try {
    const response = request('GET', url);
    const jsonData = JSON.parse(response.getBody('utf8'));
    log(`Погода в ${jsonData.name}:`);
    log(`Температура: ${jsonData.main.temp}°C`);
    log(`Описание: ${jsonData.weather[0].description}`);
    log(`Координаты: ${jsonData.coord.lat}, ${jsonData.coord.lon}`);
    // log(JSON.stringify(jsonData, null, 2));
} catch (error) {
    console.error('Ошибка:', error.message);
}

/*
Погода в Perm:
Температура: 4.7°C
Описание: переменная облачность
*/