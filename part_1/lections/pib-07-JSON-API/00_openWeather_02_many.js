const request = require('sync-request');
const log = console.log;

require('dotenv').config();
const API_KEY = process.env.API_KEY_OpenWeather;

const host = 'http://api.openweathermap.org/data/2.5/weather';

const getWeatherForCity = (city) => {
    try {
        let query = `q=${city}&appid=${API_KEY}&units=metric&lang=ru`;
        let url = `${host}?${query}`;
        let jsonData = JSON.parse(request('GET', url).getBody('utf8'));
        return {
            city: jsonData.name,
            temp: jsonData.main.temp
        }
    } catch (error) {
        return {
            city,
            temp: 'undefined'
        };
    }
}

const cities = ['Perm', 'Moscow', 'Saint-Petersburg', 'Petersburg'];
cities
    .forEach(city => log(JSON.stringify(getWeatherForCity(city), null, 2)));
