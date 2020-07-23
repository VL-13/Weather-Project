import { getByCity } from './api.js';
import { cities } from '../data/backgroundPhotos.js';

function renderCurrentCity(cityKey) {
    let cityImage = cities[cityKey].url;
    let image = document.getElementById('image-placeholder');
    image.setAttribute('src', cityImage);
    getByCity(cities[cityKey].name).then(data => renderWeatherInfo(data))
}

function renderWeatherInfo (data) {
    const {name, main, wind, sys} = data;
    let target = document.querySelector('.locations');

    const infobox = document.createElement('div');
    infobox.classList.add('weather-info');

    //console.log(data);

    const cityName = document.createElement('div');
    cityName.innerText = `${name}, ${sys.country}`
    cityName.setAttribute('class', 'city-name')

    const temperature = document.createElement('div');
    temperature.innerText = `${main.temp.toFixed(0)}°C`
    temperature.setAttribute('class', 'temperature')

    const weatherDescription = document.createElement('div');
    weatherDescription.innerHTML =`${data.weather[0].description}\n <hr>`
    weatherDescription.setAttribute('class', 'description')

    const feelTemp = document.createElement('div');
    feelTemp.setAttribute('class', 'info-line');
    feelTemp.innerHTML = `<p>Feels like:</p> <p>${main.feels_like.toFixed(0)}°C </p>`
    
    const windSpeed = document.createElement('div');
    windSpeed.setAttribute('class', 'info-line');
    windSpeed.innerHTML = `<p> Wind speed:</p> <p>${wind.speed} km/h</p>`

    const pressure = document.createElement('div');
    pressure.setAttribute('class', 'info-line');
    pressure.innerHTML = `<p>Atmospheric pressure:</p> <p>${data.main.pressure} hPa</p>`

    const humidity = document.createElement('div');
    humidity.setAttribute('class', 'info-line');
    humidity.innerHTML = `<p>Humidity:</p> <p>${data.main.humidity} %</p>`

    /*const weatherIcon = document.createElement('img');
    const icon = data.weather[0].icon
    const imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.setAttribute('class', 'weather-icon')
    weatherIcon.src = imgSrc;*/

    infobox.append(cityName)
    infobox.append(temperature)
    infobox.append(weatherDescription)
    infobox.append(feelTemp)
    infobox.append(windSpeed)
    infobox.append(pressure)
    infobox.append(humidity)
   // infobox.append(weatherIcon)
    target.append(infobox);
}

function createDropdown(cities) {
    let select = document.createElement('select');
    let target = document.querySelector('.locations');
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
