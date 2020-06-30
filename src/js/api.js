const API_KEY = '0e534b9ba5862d894024f3dc71035201';
export function getByCity(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=${API_KEY}`).then(rsp => rsp.json())
<<<<<<< HEAD
}
=======
}
>>>>>>> 12e4f461d38eef4214d89ec1b90e58dd5913589f
