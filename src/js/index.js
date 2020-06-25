import '../styles/style.scss';
import { getByCity } from './api.js';
import { cities } from '../data/backgroundPhotos.js';
import { routes } from './routes.js';

let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
let mm = m < 10 ? '0' + m : m;
let dd = d < 10 ? '0' + d : d;
document.getElementById("today").innerHTML = "WeatherApp |  " + dd + "/" + mm + "/" + y;
today.style.color = 'white';

function renderCurrentCity(cityKey) {
    let cityImage = cities[cityKey].url;
    let image = document.getElementById('image-placeholder');
    image.setAttribute('src', cityImage);
    getByCity(cities[cityKey].name).then(data => renderWeatherInfo(data))
}

function renderWeatherInfo (data) {
    const {name, main, wind} = data;
    let target = document.querySelector('.locations');

    const infobox = document.createElement('div');
    infobox.classList.add('weather-info');

    console.log(data);

    const cityName = document.createElement('div');
    cityName.innerText = `${name}`

    const weatherDescription = document.createElement('div');
    weatherDescription.innerText =`${data.weather[0].description}`

    const temperature = document.createElement('div');
    temperature.innerText = `Temperature : ${main.temp.toFixed(0)}°C`

    const feelTemp = document.createElement('div');
    feelTemp.innerText = `Feels like: ${main.feels_like.toFixed(0)}°C`
    
    const windSpeed = document.createElement('div');
    windSpeed.innerText = `Wind speed: ${wind.speed} km/h`

    const pressure = document.createElement('div');
    pressure.innerText = `Atmospheric pressure: ${data.main.pressure} hPa`

    const humidity = document.createElement('div');
    humidity.innerText = `Humidity: ${data.main.humidity} %`

    infobox.append(cityName)
    infobox.append(weatherDescription)
    infobox.append(temperature)
    infobox.append(feelTemp)
    infobox.append(windSpeed)
    infobox.append(pressure)
    infobox.append(humidity)
    target.append(infobox);
}

function createDropdown(cities) {
    let select = document.createElement('select');
    let target = document.querySelector('.locations');
    if(!target) return;
    select.setAttribute('name', 'city-selector');
    select.setAttribute('id', 'city-selector');
    select.setAttribute('class', 'locations__select');

    let emptyOption = document.createElement('option');
    emptyOption.setAttribute('value', 'none');
    emptyOption.innerText = '<--Select-->';
    select.append(emptyOption);
    
    for (const city in cities) {
        let option = document.createElement('option');
        option.setAttribute('value', city)
        option.setAttribute('id', city)
        option.innerText = cities[city].name;
        select.append(option);
    }
    select.addEventListener('change', (event) => {
        let cityKey = event.target.value;
        renderCurrentCity(cityKey);
        localStorage.setItem('selectedCity', cityKey);
        // Call API
        getByCity(cities[cityKey].name)
            .then(response => response.json())
            .then(data => renderWeatherInfo(data))
            
    })
    target.append(select);
}

createDropdown(cities);

const selectedCity = localStorage.getItem('selectedCity');

if(selectedCity) {
    let selectedCityElement = document.getElementById(selectedCity)
    if(selectedCityElement){
        selectedCityElement.selected = true
        renderCurrentCity(selectedCity);
    } 
} 

function initNavigation() {
    let route = null;
    for(let item in routes){
        if(location.pathname.includes(item)) {
            route = item;
        }
    }
    document.getElementById(route).classList.add('active')
}

initNavigation()