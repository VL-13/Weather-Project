import { cities } from '../data/backgroundPhotos.js';
import { getForecast } from './api.js';

const selectedCity = localStorage.getItem('selectedCity');

if(selectedCity) {
    getForecast(cities[selectedCity].name).then(data => {

        return data.list.reduce((accumulator, item) => {
            const dateKey = new Date(item.dt_txt).getDate();
            if(!accumulator[dateKey]) {
                accumulator[dateKey] = [];
            }
            accumulator[dateKey].push(item);
            return accumulator;
        }, {})

    }).then(result => {
        for(let day in result) {result[day].map((item) => {
            
            let cityName = document.querySelector('.selected-city');
            cityName.innerText = cities[selectedCity].name;

            let time12 = new Date(item.dt_txt).getHours();
                if (time12 === 12) {
                let forecastInfobox = document.querySelector('.forecast-infobox');

                let forecastDate = document.createElement('div');
                let day = new Date(item.dt_txt).getDate();
                let month = new Date(item.dt_txt).getMonth() + 1;
                let year = new Date(item.dt_txt).getFullYear();
                let mm = month < 10 ? '0' + month : month;
                let dd = day < 10 ? '0' + day : day;
                forecastDate.innerText = dd + "/" + mm + "/" + year;

                const forecastInfo = document.createElement('div');
                forecastInfo.setAttribute('class', 'forecast-info');
                const temperature = document.createElement('div');
                temperature.setAttribute('class', 'info-line');
                const description = document.createElement('div');
                const windSpeed = document.createElement('div');
                windSpeed.setAttribute('class', 'info-line');
                const pressure = document.createElement('div');
                pressure.setAttribute('class', 'info-line');
                const humidity = document.createElement('div');
                humidity.setAttribute('class', 'info-line');

                temperature.innerHTML = `<p> Temperature:</p> <p>${item.main.temp.toFixed(0)} °C</p>`;
                description.innerHTML = item.weather[0].description;
                windSpeed.innerHTML = `<p> Wind speed:</p> <p>${item.wind.speed} km/h</p>`;
                pressure.innerHTML = `<p> Atmospheric pressure:</p> <p>${item.main.pressure} hPa</p>`
                humidity.innerHTML = `<p> Humidity:</p> <p>${item.main.humidity} %</p>`
                const iconSource =document.createElement('div');
                const weatherIcon = document.createElement('img');
                const icon = item.weather[0].icon
                const imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                weatherIcon.setAttribute('class', 'weather-icon')
                weatherIcon.src = imgSrc;
                iconSource.append(weatherIcon);

                forecastInfobox.append(forecastInfo);
                forecastInfo.append(forecastDate);
                forecastInfo.append(iconSource);
                forecastInfo.append(description);
                forecastInfo.append(temperature);
                forecastInfo.append(windSpeed);
                forecastInfo.append(pressure);
                forecastInfo.append(humidity);
                } 
        });
    }
});
}
