import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '97b2900417e0cdc907dd36c8867ba21a';

export const fetchWeather = async query => {
  const data = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY
    }
  });

  return data;
};
