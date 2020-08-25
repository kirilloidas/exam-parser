export class DateComponent{
    constructor() {}

    static getDateToday() {
        let date = new Date();
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
}

export class DaysWeather {
    constructor() {
        this._daysOfWeek,
        this._dateOfWeek
    }

    static setDayOfWeek(weather) {
        let arr = [];
        let days = [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ];
        for(let i = 0; i < 5; i++) {
            let date = new Date(weather.daily[i].dt * 1000);
            arr[i] = days[date.getDay()];
        }
        this._daysOfWeek = arr;
    }

    static getDayOfWeek() {
        return this._daysOfWeek;
    }

    static setDateOfWeek(weather) {
        let arr = [];
        let mounth = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        for(let i = 0; i < 5; i++) {
            let date = new Date(weather.daily[i].dt * 1000);
            arr[i] = `${mounth[date.getMonth()]} ${date.getDate()}`;
        }
        this._dateOfWeek = arr;
    }

    static getDateOfWeek() {
        return this._dateOfWeek;
    }

}