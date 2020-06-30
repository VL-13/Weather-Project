import { getByCity} from './api.js';
import { cities } from '../data/backgroundPhotos.js';


function renderForecastInfo(data) {
    const box = document.querySelector('.cities-list');
    const cityBox = document.createElement('div');
    cityBox.setAttribute('class', 'city-box-info')
    
    cityBox.innerText = `${data.name} ${data.main.temp.toFixed(0)}°C`;
    const weatherIcon = document.createElement('img');
    const icon = data.weather[0].icon
    const imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.setAttribute('class', 'weather-icon')
    weatherIcon.src = imgSrc;

    cityBox.append(weatherIcon);
    box.append(cityBox);
}

let arrayOfPromises = [];

let selectedCity = localStorage.getItem('selectedCity');
for(let city in cities) {
    arrayOfPromises.push(getByCity(cities[city].name));
    if (city === selectedCity) {
        arrayOfPromises.pop(getByCity(cities[city].name));
    }
}

Promise.all(arrayOfPromises).then(data => data.map(item => renderForecastInfo(item)))