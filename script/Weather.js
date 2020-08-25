export class CurrentWeather {
    constructor() {
        this._currentWeatherIcon,
        this._currentDescription,
        this._currentWeatherTemperature,
        this._temperatureFeel,
        this._currentWeatherSunRise,
        this._currentWeatherSunSet,
        this._currentDuration
    }
    
    static setCurrentIcon(weather) {
        this._currentWeatherIcon = `http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`;
    }

    static getCurrentIcon() {
        return this._currentWeatherIcon;
    }

    static setCurrentDescription(weather) {
        this._currentDescription = `${weather.current.weather[0].main}`;
    }

    static getCurrentDescription() {
        return this._currentDescription;
    }

    static setCurrentTemperature(weather) {
        this._currentWeatherTemperature = `${(parseFloat(weather.current.temp) - 273.15).toFixed(2)} &#8451`;
    }

    static getCurrentTemperature() {
        return this._currentWeatherTemperature;
    }

    static setCurrentTempFeel(weather) {
        this._temperatureFeel = `Real Feel ${(parseFloat(weather.current.feels_like) - 273.15).toFixed(2)} &#8451`;
    }

    static getCurrentTempFeel() {
        return this._temperatureFeel;
    }

    static setCurrentSunRise(weather) {
        let date_sunrise = new Date(weather.current.sunrise * 1000);
        let h_sunrise = date_sunrise.getHours();
        let m_sunrise = date_sunrise.getMinutes();
        if (m_sunrise < 10) {
            m_sunrise = `0${m_sunrise}`;
        }
        this._currentWeatherSunRise = `Sunrise: ${h_sunrise}:${m_sunrise}`;
    }

    static getCurrentSunRise() {
        return this._currentWeatherSunRise;
    }

    static setCurrentSunSet(weather) {
        let date_sunset = new Date(weather.current.sunset * 1000);
        let h_sunset = date_sunset.getHours();
        let m_sunset = date_sunset.getMinutes();
        if (m_sunset < 10) {
            m_sunset = `0${m_sunset}`;
        }
        this._currentWeatherSunSet = `Sunset: ${h_sunset}:${m_sunset}`;
    }

    static getCurrentSunSet() {
        return this._currentWeatherSunSet;
    }

    static setCurrentDuration(weather) {
        let date_sunrise = new Date(weather.current.sunrise * 1000).getTime();
        let date_sunset = new Date(weather.current.sunset * 1000).getTime();
        let hourDiff = date_sunset - date_sunrise;
        let minDiff = hourDiff / 60 / 1000;
        let hDiff = hourDiff / 3600 / 1000;
        let hours = Math.floor(hDiff);
        let minutes = Math.floor(minDiff - 60 * hours);
        this._currentDuration = `Duration: ${hours}:${minutes}`;
    }

    static getCurrentDuration() {
        return this._currentDuration;
    }

}


export class HourlyWeather {
    constructor() {
        this._icons,
        this._descriptions,
        this._temperatures,
        this._temperatureFeel,
        this._wind
    }

    static setIcons(weather) {
        let arr = [];
        let a = 0;
        for(let i = 0; i < 23; i = i + 4) {
            arr[a] = `http://openweathermap.org/img/wn/${weather.hourly[i].weather[0].icon}@2x.png`;
            a++;
        }
        this._icons = arr;
    }

    static getIcons() {
        return this._icons;
    }

    static setDescritpions(weather) {
        let arr = [];
        let a = 0;
        for(let i = 0; i < 23; i = i + 4) {
            arr[a] = weather.hourly[i].weather[0].main;
            a++;
        }
        this._descriptions = arr;
    }

    static getDescriptions() {
        return this._descriptions;
    }

    static setTemperatures(weather) {
        let arr = [];
        let a = 0;
        for(let i = 0; i < 23; i = i + 4) {
            arr[a] = `${(parseFloat(weather.hourly[i].temp) - 273.15).toFixed(2)} &#8451`;
        }
        this._temperatures = arr;
    }

    static getTemperatures() {
        return this._temperatures;
    }

    static setTemperaturesFeel(weather) {
        let arr = [];
        let a = 0;
        for(let i = 0; i < 24; i = i + 4) {
            arr[a] = `${(parseFloat(weather.hourly[i].feels_like) - 273.15).toFixed(2)} &#8451`;
        }
        this._temperatureFeel = arr;
    }

    static getTemperaturesFeel() {
        return this._temperatureFeel;
    }


}