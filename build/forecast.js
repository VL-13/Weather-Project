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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/forecast.js");
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

/***/ "./src/js/forecast.js":
/*!****************************!*\
  !*** ./src/js/forecast.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_backgroundPhotos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/backgroundPhotos.js */ \"./src/data/backgroundPhotos.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n\r\n\r\n\r\n\r\nconst selectedCity = localStorage.getItem('selectedCity');\r\n\r\nif(selectedCity) {\r\n    Object(_api_js__WEBPACK_IMPORTED_MODULE_1__[\"getForecast\"])(_data_backgroundPhotos_js__WEBPACK_IMPORTED_MODULE_0__[\"cities\"][selectedCity].name).then(data => {\r\n\r\n        return data.list.reduce((accumulator, item) => {\r\n            const dateKey = new Date(item.dt_txt).getDate();\r\n            if(!accumulator[dateKey]) {\r\n                accumulator[dateKey] = [];\r\n            }\r\n            accumulator[dateKey].push(item);\r\n            return accumulator;\r\n        }, {})\r\n\r\n    }).then(result => {\r\n        for(let day in result) {result[day].map((item) => {\r\n            \r\n            let cityName = document.querySelector('.selected-city');\r\n            cityName.innerText = _data_backgroundPhotos_js__WEBPACK_IMPORTED_MODULE_0__[\"cities\"][selectedCity].name;\r\n\r\n            let time12 = new Date(item.dt_txt).getHours();\r\n                if (time12 === 12) {\r\n                let forecastInfobox = document.querySelector('.forecast-infobox');\r\n\r\n                let forecastDate = document.createElement('div');\r\n                let day = new Date(item.dt_txt).getDate();\r\n                let month = new Date(item.dt_txt).getMonth() + 1;\r\n                let year = new Date(item.dt_txt).getFullYear();\r\n                let mm = month < 10 ? '0' + month : month;\r\n                let dd = day < 10 ? '0' + day : day;\r\n                forecastDate.innerText = dd + \"/\" + mm + \"/\" + year;\r\n\r\n                const forecastInfo = document.createElement('div');\r\n                forecastInfo.setAttribute('class', 'forecast-info');\r\n                \r\n                const temperature = document.createElement('div');\r\n                const description = document.createElement('div');\r\n                const windSpeed = document.createElement('div');\r\n                const pressure = document.createElement('div');\r\n                const humidity = document.createElement('div');\r\n\r\n                temperature.innerText = `Temperature: ${item.main.temp.toFixed(0)} °C`;\r\n                description.innerText = item.weather[0].description;\r\n                windSpeed.innerText = `Wind speed: ${item.wind.speed} km/h `;\r\n                pressure.innerText = `Atmospheric pressure: ${item.main.pressure} hPa`\r\n                humidity.innerText = `Humidity: ${item.main.humidity} %`\r\n                const iconSource =document.createElement('div');\r\n                const weatherIcon = document.createElement('img');\r\n                const icon = item.weather[0].icon\r\n                const imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;\r\n                weatherIcon.setAttribute('class', 'weather-icon')\r\n                weatherIcon.src = imgSrc;\r\n                iconSource.append(weatherIcon);\r\n\r\n                \r\n                forecastInfobox.append(forecastInfo);\r\n                forecastInfo.append(forecastDate);\r\n                forecastInfo.append(iconSource);\r\n                forecastInfo.append(description);\r\n                forecastInfo.append(temperature);\r\n                forecastInfo.append(windSpeed);\r\n                forecastInfo.append(pressure);\r\n                forecastInfo.append(humidity);\r\n                //console.log(item);\r\n                }\r\n            \r\n        });\r\n\r\n    }\r\n\r\n});\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/forecast.js?");

/***/ })

/******/ });