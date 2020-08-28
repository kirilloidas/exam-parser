import { Initialization } from './Initialization.js';
import { CurrentWeather, HourlyWeather, Wind, DailyWeather} from './Weather.js';
import { DateComponent, DaysWeather } from './DateComponent.js';
import { Search } from './Search.js';
import { NearbyPlaces } from './NearbyPlaces.js';

window.addEventListener('load', () => {
    
    document.addEventListener('keydown', function(event) {
        if(event.code == 'Enter') {
            Search.setCityCoordinates(header_search.value);
            insert();
        }
    });

    
    
    function insert() {
        DaysWeather.setDateUTC();
        console.log(DaysWeather.getDateUTC());
        if(document.title == 'Weater-today') {
            setTimeout(() => {
                    current_weather_icon.src = CurrentWeather.getCurrentIcon();
                    current_weather_description.innerHTML = CurrentWeather.getCurrentDescription();
                    current_weather_date.innerHTML = DateComponent.getDateToday();
                    current_weather_temperature.innerHTML = CurrentWeather.getCurrentTemperature();
                    temperature_feel.innerHTML = CurrentWeather.getCurrentTempFeel();
                    current_weather_sunrise.innerHTML = CurrentWeather.getCurrentSunRise();
                    current_weather_sunset.innerHTML = CurrentWeather.getCurrentSunSet();
                    current_weather_duration.innerHTML = CurrentWeather.getCurrentDuration();

                    for(let i = 0; i < name_of_city.length; i++) {
                        name_of_city[i].innerHTML = NearbyPlaces.getWeatherPlaces()[i].name;
                        city_img[i].src = NearbyPlaces.getWeatherPlaces()[i].icon;
                        city_temp[i].innerHTML = NearbyPlaces.getWeatherPlaces()[i].temp;
                    }
            
                    for(let i = 0; i < hourly_icons.length; i++) {
                        hourly_icons[i].src = HourlyWeather.getIcons()[i];
                        hourly_description[i].innerHTML = HourlyWeather.getDescriptions()[i];
                        hourly_temperature[i].innerHTML = HourlyWeather.getTemperatures()[i];
                        hourly_temperature_feel[i].innerHTML = HourlyWeather.getTemperaturesFeel()[i];
                        hourly_wind[i].innerHTML = `${Wind.getWindSpeed()[i]} ${Wind.getWindDirection()[i]}`;
                    }
    
            }, 1000);
        } else if (document.title == '5-day-forecast') {

            forecast_list.addEventListener('click', function(event) {
                if(event.target.tagName == 'LI') {
                    Initialization.initializationHourlyDays(event.target.value);
                    setTimeout(() => {
                        for(let i = 0; i < DailyWeather.getHourlyWeather().length; i++) {
                            if(DailyWeather.getHourlyWeather().length == hourly_icons.length) {
                                break;
                            }
                            hourly_date[i].innerHTML = DailyWeather.getHourlyWeather()[i].dt;
                            hourly_icons[i].src = DailyWeather.getHourlyWeather()[i].icon;
                            hourly_description[i].innerHTML = DailyWeather.getHourlyWeather()[i].description;
                            hourly_temperature[i].innerHTML = DailyWeather.getHourlyWeather()[i].temp;
                            hourly_temperature_feel[i].innerHTML = DailyWeather.getHourlyWeather()[i].tempFeel;
                        }
                        console.log(DailyWeather.getHourlyWeather());
                    }, 2000);
                    console.log(event.target.value);
                } else {
                    Initialization.initializationHourlyDays(event.target.parentNode.value);
                    setTimeout(() => {
                        for(let i = 0; i < DailyWeather.getHourlyWeather().length; i++) {
                            if(DailyWeather.getHourlyWeather().length == hourly_icons.length) {
                                break;
                            }
                            hourly_date[i].innerHTML = DailyWeather.getHourlyWeather()[i].dt;
                            hourly_icons[i].src = DailyWeather.getHourlyWeather()[i].icon;
                            hourly_description[i].innerHTML = DailyWeather.getHourlyWeather()[i].description;
                            hourly_temperature[i].innerHTML = DailyWeather.getHourlyWeather()[i].temp;
                            hourly_temperature_feel[i].innerHTML = DailyWeather.getHourlyWeather()[i].tempFeel;
                        };
                    }, 2000);
                    console.log(event.target.parentNode.value);
                }
                
            });

            setTimeout(() => {
                for(let i = 0; i < 5; i++) {
                    item_title[i].innerHTML = DaysWeather.getDayOfWeek()[i];
                    item_month[i].innerHTML = DaysWeather.getDateOfWeek()[i];
                    item_img[i].src = DailyWeather.getDailyIcons()[i];
                    item_degrees[i].innerHTML = DailyWeather.getDailyTemp()[i];
                    item_precipitation[i].innerHTML = DailyWeather.getDailyDescription()[i];
                }
            }, 2000);
        }
    }
    
    

});
