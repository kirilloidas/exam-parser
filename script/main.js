import { Initialization } from './Initialization.js';
import { CurrentWeather, HourlyWeather, Wind, DailyWeather} from './Weather.js';
import { DateComponent, DaysWeather } from './DateComponent.js';
import { Search } from './Search.js';

window.addEventListener('load', () => {

    document.addEventListener('keydown', function(event) {
        if(event.code == 'Enter') {
            Search.setCityCoordinates(header_search.value);
            insert();
        }
    });
    
    function insert() {
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
            
            
                    for(let i = 0; i < hourly_icons.length; i++) {
                        hourly_icons[i].src = HourlyWeather.getIcons()[i];
                        hourly_description[i].innerHTML = HourlyWeather.getDescriptions()[i];
                        hourly_temperature[i].innerHTML = HourlyWeather.getTemperatures()[i];
                        hourly_temperature_feel[i].innerHTML = HourlyWeather.getTemperaturesFeel()[i];
                        hourly_wind[i].innerHTML = `${Wind.getWindSpeed()[i]} ${Wind.getWindDirection()[i]}`;
                    }
    
            }, 1000);
        } else if (document.title == '5-day-forecast') {
            setTimeout(() => {
                for(let i = 0; i < 5; i++) {
                    item_title[i].innerHTML = DaysWeather.getDayOfWeek()[i];
                    item_month[i].innerHTML = DaysWeather.getDateOfWeek()[i];
                    item_img[i].src = DailyWeather.getDailyIcons()[i];
                    item_degrees[i].innerHTML = DailyWeather.getDailyTemp()[i];
                    item_precipitation[i].innerHTML = DailyWeather.getDailyDescription()[i];
                }
            }, 1000);
        }
    }
    
    

});
