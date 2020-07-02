import '../styles/style.scss';
import { routes } from './routes.js';

let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
let mm = m < 10 ? '0' + m : m;
let dd = d < 10 ? '0' + d : d;
document.getElementById("today").innerHTML = "WeatherApp |  " + dd + "/" + mm + "/" + y;
today.style.color = 'white';

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