export class NearbyPlaces {
    constructor() {
        this._places;
    }

    static initializationPlaces(lat, lon) {
        fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=50&appid=b352df7456cbd31cf07f70660e3eb572`)
        .then(response => response.json())
        .then(data => this.setWeatherPlaces(data))
    }

    static setWeatherPlaces(data) {
        let arrPlaces = []
        let j = 0;
        for(let i = 49; i > 45; i--) {
            arrPlaces[j] = {
                name: data.list[i].name,
                temp: `${(parseFloat(data.list[i].main.temp) - 273.15).toFixed(0)} &#8451`,
                icon: `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`
            }
            j++;
        }
        this._places = arrPlaces;
    }

    static getWeatherPlaces() {
        return this._places;
    }
}