import axios from 'axios';

const API_KEY = '0ff6650072b52d57861bf2551b40d5b1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},au`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}