const API_KEY = "1607394c84102ee7158d0ab45d78d0ad";
const BASE_URL = " https://api.openweathermap.org/data/2.5"


// https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=1607394c84102ee7158d0ab45d78d0ad 

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default getWeatherData;