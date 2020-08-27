import { Initialization } from './Initialization.js';
import { CurrentWeather, HourlyWeather, Wind } from './Weather.js';
import { NearbyPlaces } from './NearbyPlaces.js';

export class Search {
    constructor() {
        this.Initialization = Initialization;
    }

    static setCityCoordinates(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b352df7456cbd31cf07f70660e3eb572`)
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                document.location.href = './404-error.html';
            }
        })
        .then(data => {
                Initialization.initializationAjax(data.coord.lat, data.coord.lon);
                NearbyPlaces.initializationPlaces(data.coord.lat, data.coord.lon);
        })
        // .catch(
        //     document.location.href = './404-error.html'
        // );
        
        
    }
}