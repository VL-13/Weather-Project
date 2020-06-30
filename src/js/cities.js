import { getByCity} from './api.js';
import { cities } from '../data/backgroundPhotos.js';


function renderForecastInfo(data) {
    const box = document.querySelector('.cities-list');
    const cityBox = document.createElement('div');
    const cityName = document.createElement('span');
    cityBox.append(cityName)
    cityName.innerText = `${data.name}`;
    cityBox.innerText = `${data.main.temp.toFixed(0)}°C`;
    box.append(cityBox);
}

console.log(data);

let arrayOfPromises = [];

for(let city in cities) {
    arrayOfPromises.push(getByCity(cities[city].name))
}

Promise.all(arrayOfPromises).then(data => data.map(item => renderForecastInfo(item)))