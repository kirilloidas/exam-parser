import { CurrentWeather } from './Weather.js';


export class Initialization {
    constructor() {
        this.CurrentWeather = CurrentWeather;
    }

    initializationAjax() {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.43&lon=30.52&exclude=minutely&appid=b352df7456cbd31cf07f70660e3eb572')
        .then(response => response.json())
        .then(data => {
            this.CurrentWeather.setCurrentIcon(data);
            this.CurrentWeather.setCurrentTemperature(data);
            this.CurrentWeather.setCurrentTempFeel(data);
            this.CurrentWeather.setCurrentSunRise(data);
            this.CurrentWeather.setCurrentSunSet(data);
            // console.log(this.CurrentWeather.getCurrentTemperature());
        });
    }
}