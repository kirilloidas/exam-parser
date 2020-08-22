export class CurrentWeather {
    constructor() {
        this._currentWeatherIcon,
        this._currentWeatherTemperature,
        this._temperatureFeel,
        this._currentWeatherSunRise,
        this._currentWeatherSunSet
    }
    static wcurrentWeather(weather) {
        // current_weather_icon.src = `http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`;
        // current_weather_temperature.innerHTML = `${(parseFloat(weather.current.temp) - 273.15).toFixed(2)} &#8451`;
        // temperature_feel.innerHTML = `Real Feel ${(parseFloat(weather.current.feels_like) - 273.15).toFixed(2)} &#8451`;

        // let date_sunrise = new Date(weather.current.sunrise * 1000);
        // let h_sunrise = date_sunrise.getHours();
        // let m_sunrise = date_sunrise.getMinutes();
        // if (m_sunrise < 10) {
        //     m_sunrise = `0${m_sunrise}`;
        // }
        // current_weather_sunrise.innerHTML = `Sunrise: ${h_sunrise}:${m_sunrise}`;

        // let date_sunset = new Date(weather.current.sunset * 1000);
        // let h_sunset = date_sunset.getHours();
        // let m_sunset = date_sunset.getMinutes();
        // if (m_sunset < 10) {
        //     m_sunset = `0${m_sunset}`;
        // }
        // current_weather_sunset.innerHTML = `Sunset: ${h_sunset}:${m_sunset}`;
    }
    
    static setCurrentIcon(weather) {
        this._currentWeatherIcon = `http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`;
    }

    getCurrentIcon() {
        return this._currentWeatherIcon;
    }

    static setCurrentTemperature(weather) {
        this._currentWeatherTemperature = `${(parseFloat(weather.current.temp) - 273.15).toFixed(2)} &#8451`;
    }

    getCurrentTemperature() {
        return this._currentWeatherTemperature;
    }

    static setCurrentTempFeel(weather) {
        this._temperatureFeel = `Real Feel ${(parseFloat(weather.current.feels_like) - 273.15).toFixed(2)} &#8451`;
    }

    getCurrentTempFeel() {
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

    getCurrentSunRise() {
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

    getCurrentSunSet() {
        return this._currentWeatherSunSet;
    }


}