import { Initialization } from './Initialization.js';
import { CurrentWeather, HourlyWeather } from './Weather.js';
import { DateComponent } from './DateComponent.js';

window.addEventListener('load', () => {

    let initialization = new Initialization();
    
    initialization.initializationAjax();
    
    // 1598015293067    {lon: 30.52, lat: 50.43}
    
    setTimeout(() => {
        current_weather_icon.src = CurrentWeather.getCurrentIcon();
        current_weather_description.innerHTML = CurrentWeather.getCurrentDescription();
        current_weather_date.innerHTML = DateComponent.getDateToday();
        current_weather_temperature.innerHTML = CurrentWeather.getCurrentTemperature();
        temperature_feel.innerHTML = CurrentWeather.getCurrentTempFeel();
        current_weather_sunrise.innerHTML = CurrentWeather.getCurrentSunRise();
        current_weather_sunset.innerHTML = CurrentWeather.getCurrentSunSet();
        current_weather_duration.innerHTML = CurrentWeather.getCurrentDuration();


        for(let i = 0; i < hourly_icons.length; i++) {
            hourly_icons[i].src = HourlyWeather.getIcons()[i];
            hourly_description[i].innerHTML = HourlyWeather.getDescriptions()[i];
            hourly_temperature[i].innerHTML = HourlyWeather.getTemperatures()[i];
            hourly_temperature_feel[i].innerHTML = HourlyWeather.getTemperaturesFeel()[i];
        }
    }, 1000);

});
