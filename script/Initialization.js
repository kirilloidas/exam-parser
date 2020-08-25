import { CurrentWeather, HourlyWeather } from './Weather.js';


export class Initialization {
    constructor() {
        // this.CurrentWeather = CurrentWeather;
    }

    initializationAjax() {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.43&lon=30.52&exclude=minutely&appid=b352df7456cbd31cf07f70660e3eb572')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            CurrentWeather.setCurrentIcon(data);
            CurrentWeather.setCurrentDescription(data);
            CurrentWeather.setCurrentTemperature(data);
            CurrentWeather.setCurrentTempFeel(data);
            CurrentWeather.setCurrentSunRise(data);
            CurrentWeather.setCurrentSunSet(data);
            CurrentWeather.setCurrentDuration(data);
            HourlyWeather.setIcons(data);
            HourlyWeather.setDescritpions(data);
            HourlyWeather.setTemperatures(data);
            HourlyWeather.setTemperaturesFeel(data);
            // console.log(this.CurrentWeather.getCurrentTemperature());
        });
    }
}