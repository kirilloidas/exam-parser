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
        this._dateOfWeek,
        this._daysUTC
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

    static setDateUTC() {
        let arrOfDate = [];
        let j = 0;
        let today = new Date();
        for(let i = 1; i < 5; i++) {
            let dd = today.getDate() + i;
            let mm = today.getMonth() + 1;
            let yyyy = today.getFullYear();
            let date = new Date(`${yyyy}, ${mm}, ${dd}`);
            arrOfDate[j] = Math.round((date.getTime() + 10800000) / 1000);
            j++; 
        }
        this._daysUTC = arrOfDate;
    }

    static getDateUTC() {
        return this._daysUTC;
    }

}