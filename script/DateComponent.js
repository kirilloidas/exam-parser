export class DateComponent{
    constructor() {}

    static getDateToday() {
        let date = new Date();
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
}