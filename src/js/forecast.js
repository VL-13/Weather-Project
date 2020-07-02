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
                const description = document.createElement('div');
                const windSpeed = document.createElement('div');
                const pressure = document.createElement('div');
                const humidity = document.createElement('div');

                temperature.innerText = `Temperature: ${item.main.temp.toFixed(0)} °C`;
                description.innerText = item.weather[0].description;
                windSpeed.innerText = `Wind speed: ${item.wind.speed} km/h `;
                pressure.innerText = `Atmospheric pressure: ${item.main.pressure} hPa`
                humidity.innerText = `Humidity: ${item.main.humidity} %`
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
