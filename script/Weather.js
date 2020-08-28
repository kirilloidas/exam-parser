import { DaysWeather } from './DateComponent.js';

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
        this._currentWeatherTemperature = `${(parseFloat(weather.current.temp) - 273.15).toFixed(0)} &#8451`;
    }

    static getCurrentTemperature() {
        return this._currentWeatherTemperature;
    }

    static setCurrentTempFeel(weather) {
        this._temperatureFeel = `Real Feel ${(parseFloat(weather.current.feels_like) - 273.15).toFixed(0)} &#8451`;
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
            arr[a] = `${(parseFloat(weather.hourly[i].temp) - 273.15).toFixed(0)} &#8451`;
            a++;
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
            arr[a] = `${(parseFloat(weather.hourly[i].feels_like) - 273.15).toFixed(0)} &#8451`;
            a++;
        }
        this._temperatureFeel = arr;
    }

    static getTemperaturesFeel() {
        return this._temperatureFeel;
    }

}


export class Wind {
    constructor() {
        this._windSpeed,
        this._windDirection
    }

    static setWindSpeed(weather) {
        let arr = [];
        let a = 0;
        for(let i = 0; i < 24; i = i + 4) {
            arr[a] = weather.hourly[i].wind_speed;
            a++;
        }
        this._windSpeed = arr;
    }

    static getWindSpeed() {
        return this._windSpeed;
    }

    static setWindDirection(weather) {
        let arr = [];
        let a = 0;
        for(let i = 0; i < 24; i = i + 4) {
            let direction = weather.hourly[i].wind_deg;
            if(direction > 348.75 && direction < 11.25) {
                arr[a] = 'N';
            } else if (direction > 11.25 && direction < 33.75) {
                arr[a] = 'NNE';
            } else if (direction > 33.75 && direction < 56.25) {
                arr[a] = 'NE';
            } else if (direction > 56.25 && direction < 78.75) {
                arr[a] = 'ENE';
            } else if (direction > 78.75 && direction < 101.25) {
                arr[a] = 'E';
            } else if (direction > 101.25 && direction < 123.75) {
                arr[a] = 'ESE';
            } else if (direction > 123.75 && direction < 146.25) {
                arr[a] = 'SE';
            } else if (direction > 146.25 && direction < 168.75) {
                arr[a] = 'SSE';
            } else if (direction > 168.75 && direction < 191.25) {
                arr[a] = 'S';
            } else if (direction > 191.25 && direction < 213.75) {
                arr[a] = 'SSW';
            } else if (direction > 213.75 && direction < 236.25) {
                arr[a] = 'SW';
            } else if (direction > 236.25 && direction < 258.75) {
                arr[a] = 'WSW';
            } else if (direction > 258.75 && direction < 281.25) {
                arr[a] = 'W';
            } else if (direction > 281.25 && direction < 303.75) {
                arr[a] = 'WNW';
            } else if (direction > 303.75 && direction < 326.25) {
                arr[a] = 'NW';
            } else if (direction > 326.25 && direction < 348.75) {
                arr[a] = 'NNW';
            }
            a++;
        }
        this._windDirection = arr;
    }

    static getWindDirection() {
        return this._windDirection;
    }

}

export class DailyWeather {
    constructor() {
        this._dailyIcons,
        this._dailyTemp,
        this._dailyDescription,
        this._hourlyWeather     
    }

    static setDailyIcons(weather) {
        let arr = [];
        for(let i = 0; i < 5; i++) {
            arr[i] = `http://openweathermap.org/img/wn/${weather.daily[i].weather[0].icon}@2x.png`;
        }
        this._dailyIcons = arr;
    }

    static getDailyIcons() {
        return this._dailyIcons;
    }

    static setDailyTemp(weather) {
        let arr = [];
        for(let i = 0; i < 5; i++) {
            arr[i] = `${(parseFloat(weather.daily[i].temp.max) - 273.15).toFixed(0)} &#8451`;
        }
        this._dailyTemp = arr;
    }

    static getDailyTemp() {
        return this._dailyTemp;
    }

    static setDailyDescription(weather) {
        let arr = [];
        for(let i = 0; i < 5; i++) {
            arr[i] = weather.daily[i].weather[0].main;
        }
        this._dailyDescription = arr;
    }

    static getDailyDescription() {
        return this._dailyDescription;
    }

    static setHourlyWeather(weather, day) {
        // if(day === undefined) {
        //     day = 0;
        // }
        day = day | 0;
        let daysUTC = DaysWeather.getDateUTC();
        let arrHourlyWeather = [];

        if(day == 0) {
            let j = 0
            for(let i = 0; i < weather.list.length; i++) {
                if(daysUTC[day] == weather.list[i].dt) {
                    console.log('error');
                    break;
                }
                arrHourlyWeather[j] = {
                    dt: `${new Date(weather.list[i].dt * 1000).getHours()}:${new Date(weather.list[i].dt * 1000).getMinutes()}`,
                    icon: `http://openweathermap.org/img/wn/${weather.list[i].weather[0].icon}@2x.png`,
                    description: weather.list[i].weather[0].main,
                    temp: `${(parseFloat(weather.list[i].main.temp) - 273.15).toFixed(0)} &#8451`,
                    tempFeel: `${(parseFloat(weather.list[i].main.feels_like) - 273.15).toFixed(0)} &#8451`
                };
                j++;
                console.log(arrHourlyWeather);
                this._hourlyWeather = arrHourlyWeather;

            }
        } else if(day > 0) {
            let a = 0;
            for(let i = 0; i < weather.list.length; i++) {
                if(daysUTC[day] - 86400 > weather.list[i].dt) {
                    continue;
                } else if(daysUTC[day] == weather.list[i].dt) {
                    break;
                } else {
                    arrHourlyWeather[a] = {
                        dt: `${new Date(weather.list[i].dt * 1000).getHours()}:${new Date(weather.list[i].dt * 1000).getMinutes()}`,
                        icon: `http://openweathermap.org/img/wn/${weather.list[i].weather[0].icon}@2x.png`,
                        description: weather.list[i].weather[0].main,
                        temp: `${(parseFloat(weather.list[i].main.temp) - 273.15).toFixed(0)} &#8451`,
                        tempFeel: `${(parseFloat(weather.list[i].main.feels_like) - 273.15).toFixed(0)} &#8451`
                    };
                    a++;
                }
                
            }
            console.log(arrHourlyWeather);
            this._hourlyWeather = arrHourlyWeather;
        }
    }

    static getHourlyWeather() {
        return this._hourlyWeather;
    }
}