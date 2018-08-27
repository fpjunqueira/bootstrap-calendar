/**
 *  Date Model Object 
 */
class DateModel {

    constructor(year, month, day, fillMonth) {
        this._year = year;
        this._month = month;
        this._day = day;
        this._fillMonth = fillMonth;
    }

    get day() {
        return this._day;
    }

    get month() {
        return this._month;
    }

    get year() {
        return this._year;
    }

    isOutDay() {
        return this.month != this._fillMonth;
    }

    isHoliday() {
        return (Math.floor((Math.random() * 50) + 1) == 5) && !(this.month != this._fillMonth);
    }

    isExtendedHoliday() {
        return false;
    }

    isToday() {
        let now = moment();
        return this._year == now.year() && 
                        this._day == now.date() && 
                        this._month == now.month();
    }

}