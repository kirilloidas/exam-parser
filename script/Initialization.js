import { CurrentWeather, HourlyWeather, Wind, DailyWeather} from './Weather.js';
import { DaysWeather } from './DateComponent.js';


export class Initialization {
    constructor() {
        this._city
    }

    static initializationAjax(lat, lon, city) {
        this._city = city;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=b352df7456cbd31cf07f70660e3eb572`)
        .then(response => response.json())
        .then(data => {
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
            Wind.setWindSpeed(data);
            Wind.setWindDirection(data);
            DaysWeather.setDayOfWeek(data);
            DaysWeather.setDateOfWeek(data);
            DailyWeather.setDailyIcons(data);
            DailyWeather.setDailyTemp(data);
            DailyWeather.setDailyDescription(data);
        });

        
    }

    static initializationHourlyDays(day) {
        console.log(this._city);
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this._city}&appid=b352df7456cbd31cf07f70660e3eb572`)
        .then(response => response.json())
        .then(data => {
            DailyWeather.setHourlyWeather(data, day);
        });
    }
}