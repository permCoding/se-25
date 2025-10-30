const axios = require('axios'); // npm i axios
const log = console.log;

require('dotenv').config();
const API_KEY = process.env.API_KEY_OpenWeather;

const host = 'http://api.openweathermap.org/data/2.5/weather';

const getWeatherForCity = async (city) => {
    let query = `q=${city}&appid=${API_KEY}&units=metric&lang=ru`;
    let url = `${host}?${query}`;
    try {
        const response = await axios.get(url);
        return {
            city: response.data.name,
            temp: response.data.main.temp
        };
    } catch (error) {
        return { city, temp: 'undefined' };
    }
};

const getWeatherForCityWithDelay = async (cities, delay = 1000) => {
    for (const city of cities) {
        const result = await getWeatherForCity(city); // sleep(1000) - delay для Питона
        log(JSON.stringify(result, null, 2));
        await new Promise(resolve => setTimeout(resolve, delay)); // тут задержка
    }
};


const cities = ['Perm', 'Moscow', 'Saint-Petersburg', 'Petersburg'];
getWeatherForCityWithDelay(cities);
