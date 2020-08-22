import { Initialization } from './Initialization.js';
import { CurrentWeather } from './Weather.js';

window.addEventListener('load', () => {

    let initialization = new Initialization();
    
    initialization.initializationAjax();
    console.log(initialization);
    
    // 1598015293067    {lon: 30.52, lat: 50.43}
    
    let currentWeather = new CurrentWeather();
    console.log(currentWeather.getCurrentTemperature());



    // current_weather_icon.src = currentWeather.getCurrentIcon();

});
