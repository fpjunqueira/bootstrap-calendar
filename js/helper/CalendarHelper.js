/**
 * Calendar Helper
 * 
 * @param {*} fillMonth 
 * @param {*} fillYear 
 */
class CalendarHelper {

    static getDatesToFillMonth(fillMonth, fillYear) {
        let dates = [];
        let dayCont = 0;

        let date = CalendarHelper.lastSundayOfLastMonth(moment([fillYear, fillMonth]));
        while (dayCont < 42) {
            date.add(1, 'day');
            let dateModel = new DateModel(date.year(), date.month(), date.date(), fillMonth);
            let dateView = new DateView(dateModel);
            dates.push(dateView);
            dayCont++;
        }
        return dates;
    }

    static lastSundayOfLastMonth(month) {
        let date = month.subtract(1, 'months').endOf('month');
        let saturday = 6;
        while (date.day() != saturday) {
            date.subtract(1, 'day');
        }
        return date;
    }

}