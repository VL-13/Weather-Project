const API_KEY = '0e534b9ba5862d894024f3dc71035201';
export function getByCity(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=${API_KEY}`)
}
