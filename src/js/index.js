import '../styles/style.scss';
import {getByCity} from './api.js';
import {cities} from '../data/backgroundPhotos.js';

let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
let mm = m < 10 ? '0' + m : m;
let dd = d < 10 ? '0' + d : d;
document.getElementById("today").innerHTML = dd + "/" + mm + "/" + y;

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
        option.innerText = cities[city].name;
        select.append(option);
    }
    select.addEventListener('change', (event) => {
        let cityKey = event.target.value;
        let cityImage = cities[cityKey].url;
        let image = document.getElementById('image-placeholder');
        image.setAttribute('src', cityImage);
        // Call API
        getByCity(cities[cityKey].name)
            .then(response => response.json())
            .then(data => renderAppWeather(data))
            
    })
    target.append(select);
}
createDropdown(cities);


function renderAppWeather (data) {
    //...still in progress...

}