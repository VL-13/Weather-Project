/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/backgroundPhotos.js":
/*!**************************************!*\
  !*** ./src/data/backgroundPhotos.js ***!
  \**************************************/
/*! exports provided: cities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cities\", function() { return cities; });\nconst cities =  {\n  amsterdam: {\n    url: \"https://images.ctfassets.net/uld4p9k0kh49/sw4sZLsv4BNjcfhEJp2LC/02f71bdbdc865ff64bd883045936ce5e/Lead-for-amsterdam-flying-pig.jpg\",\n    name: \"Amsterdam\"\n  },\n  beijing: {\n    url: \"https://www.telegraph.co.uk/content/dam/news/china-watch/2019/china-watch-online/beijing-skyline-dusk_trans%2B%2Beo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg\",\n    name: \"Beijing\"\n  },\n  berlin: {\n    url: \"https://www.yourcitytours.com/media/1001/a2af8cc3463aa8dc25d7915059f9ae4290ca6fc7.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=132279003740000000\",\n    name: \"Berlin\"\n  },\n  brussels: {\n    url: \"https://static.brusselsairlines.com/_img/destinationPage2/Belgium/Brussels/Brussels_grand_place.jpg\",\n    name: \"Brussels\"\n  },\n  bucuresti: {\n    url: \"https://ibishotels.ro/wp-content/uploads/2019/03/imagine-articol-ibis-Bucuresti-1.jpg\",\n    name: \"Bucharest\"\n  },\n  chisinau: {\n    url: \"https://sx-content-labs.sixt.io/chisinau-city-header.jpg\",\n    name: \"Chisinau\"\n  },\n  lisbon: {\n    url: \"https://www.eproseed.com/wp-content/uploads/2018/07/Lisbon-Portugal.jpg\",\n    name: \"Lisbon\"\n  },\n  london: {\n    name: \"London\",\n    url:\"https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80\"\n  },\n  madrid: {\n    url: \"https://s29745.pcdn.co/wp-content/uploads/2019/12/Best-Airbnbs-in-Madrid.jpg.optimal.jpg\",\n    name: \"Madrid\"\n  },\n  monaco: {\n    url: \"https://rivierabarcrawltours.com/wp-content/uploads/2020/04/visit-monaco-in-one-day.pic-1-1.jpg\",\n    name: \"Monaco\"\n  },\n  moscow: {\n    url: \"https://cdn.getyourguide.com/img/tour_img-1233054-98.jpg\",\n    name: \"Moscow\"\n  },\n  ny: {\n    url: \"https://d12dkjq56sjcos.cloudfront.net/pub/media/wysiwyg/newyork/01-city-landing/New-York-Skyline-Big-Bus-Tours-Jan-2018.jpg\",\n    name: \"New York\"\n  },\n  paris: {\n    url: \"https://imgix.bustle.com/uploads/shutterstock/2019/9/19/a49124d9-5f62-47a5-b5ec-8dd3a3066b30-shutterstock-1420728554.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70&dpr=2\",\n    name: \"Paris\"\n  },\n  rio: {\n    url: \"https://cache.marriott.com/marriottassets/destinations/hero/rio-de-janiero-destination.jpg?interpolation=progressive-bilinear\",\n    name: \"Rio\"\n  },\n  roma: {\n    url: \"https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg\",\n    name: \"Rome\"\n  },\n  sydney: {\n    url: \"https://www.smartertravel.com/uploads/2017/02/sydney-opera-house.jpg\",\n    name: \"Sydney\"\n  },\n  tokyo: {\n    url: \"https://cdn-image.departures.com/sites/default/files/1576002985/header-tokyo-japan-LUXETOKYO1219.jpg\",\n    name: \"Tokyo\"\n  },\n}\n\n//# sourceURL=webpack:///./src/data/backgroundPhotos.js?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/*! exports provided: getByCity, getForecast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getByCity\", function() { return getByCity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getForecast\", function() { return getForecast; });\nconst API_KEY = '0e534b9ba5862d894024f3dc71035201';\r\nfunction getByCity(city) {\r\n    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=${API_KEY}`).then(rsp => rsp.json())\r\n}\r\n\r\nfunction getForecast(city) {\r\n    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&&appid=${API_KEY}`).then(rsp => rsp.json())\r\n}\n\n//# sourceURL=webpack:///./src/js/api.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n/* harmony import */ var _data_backgroundPhotos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/backgroundPhotos.js */ \"./src/data/backgroundPhotos.js\");\n\n\n\nfunction renderCurrentCity(cityKey) {\n    let cityImage = _data_backgroundPhotos_js__WEBPACK_IMPORTED_MODULE_1__[\"cities\"][cityKey].url;\n    let image = document.getElementById('image-placeholder');\n    image.setAttribute('src', cityImage);\n    Object(_api_js__WEBPACK_IMPORTED_MODULE_0__[\"getByCity\"])(_data_backgroundPhotos_js__WEBPACK_IMPORTED_MODULE_1__[\"cities\"][cityKey].name).then(data => renderWeatherInfo(data))\n}\n\nfunction renderWeatherInfo (data) {\n    const {name, main, wind, sys} = data;\n    let target = document.querySelector('.locations');\n\n    const infobox = document.createElement('div');\n    infobox.classList.add('weather-info');\n\n    //console.log(data);\n\n    const cityName = document.createElement('div');\n    cityName.innerText = `${name}, ${sys.country}`\n    cityName.setAttribute('class', 'city-name')\n\n    const temperature = document.createElement('div');\n    temperature.innerText = `${main.temp.toFixed(0)}°C`\n    temperature.setAttribute('class', 'temperature')\n\n    const weatherDescription = document.createElement('div');\n    weatherDescription.innerHTML =`${data.weather[0].description}\\n <hr>`\n    weatherDescription.setAttribute('class', 'description')\n\n    const feelTemp = document.createElement('div');\n    feelTemp.innerText = `Feels like: ${main.feels_like.toFixed(0)}°C`\n    \n    const windSpeed = document.createElement('div');\n    windSpeed.innerText = `Wind speed: ${wind.speed} km/h`\n\n    const pressure = document.createElement('div');\n    pressure.innerText = `Atmospheric pressure: ${data.main.pressure} hPa`\n\n    const humidity = document.createElement('div');\n    humidity.innerText = `Humidity: ${data.main.humidity} %`\n\n    /*const weatherIcon = document.createElement('img');\n    const icon = data.weather[0].icon\n    const imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;\n    weatherIcon.setAttribute('class', 'weather-icon')\n    weatherIcon.src = imgSrc;*/\n\n    infobox.append(cityName)\n    infobox.append(temperature)\n    infobox.append(weatherDescription)\n    infobox.append(feelTemp)\n    infobox.append(windSpeed)\n    infobox.append(pressure)\n    infobox.append(humidity)\n   // infobox.append(weatherIcon)\n    target.append(infobox);\n}\n\nfunction createDropdown(cities) {\n    let select = document.createElement('select');\n    let target = document.querySelector('.locations');\n    select.setAttribute('name', 'city-selector');\n    select.setAttribute('id', 'city-selector');\n    select.setAttribute('class', 'locations__select');\n\n    let emptyOption = document.createElement('option');\n    emptyOption.setAttribute('value', 'none');\n    emptyOption.innerText = '<--Select-->';\n    select.append(emptyOption);\n    \n    for (const city in cities) {\n        let option = document.createElement('option');\n        option.setAttribute('value', city)\n        option.setAttribute('id', city)\n        option.innerText = cities[city].name;\n        select.append(option);\n    }\n    select.addEventListener('change', (event) => {\n        let cityKey = event.target.value;\n        renderCurrentCity(cityKey);\n        localStorage.setItem('selectedCity', cityKey);\n        // Call API\n        Object(_api_js__WEBPACK_IMPORTED_MODULE_0__[\"getByCity\"])(cities[cityKey].name)\n            .then(response => response.json())\n            .then(data => renderWeatherInfo(data))\n            \n    })\n    target.append(select);\n}\n\ncreateDropdown(_data_backgroundPhotos_js__WEBPACK_IMPORTED_MODULE_1__[\"cities\"]);\n\nconst selectedCity = localStorage.getItem('selectedCity');\n\nif(selectedCity) {\n    let selectedCityElement = document.getElementById(selectedCity)\n    if(selectedCityElement){\n        selectedCityElement.selected = true\n        renderCurrentCity(selectedCity);\n    } \n} \n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });