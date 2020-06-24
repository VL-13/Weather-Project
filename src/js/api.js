const apiKey = '0e534b9ba5862d894024f3dc71035201';
export function getByCity(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
}