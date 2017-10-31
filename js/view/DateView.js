/**
 * Date View Object
 */
class DateView {
    
    constructor(dateModel) {
        this._day = dateModel.day;
        this._month = dateModel.month;
        this._year = dateModel.year;
        this.dayElement = this.createDay(dateModel);
        this.dayElement.addEventListener("click", e => this.printDay(e));

        if (dateModel.isOutDay()) {
            this.dayElement.classList.add('outDay');
        }
        if (dateModel.isHoliday()) {
            this.dayElement.classList.add('holiday');
        }
        if (dateModel.isToday() && !dateModel.isOutDay()) {
            this.dayElement.classList.add('today');
        }
    }

    createDay(dateModel) {
        let element = document.createElement('p');
        element.textContent = dateModel.day;
        element.classList.add('day');
        element.classList.add('text-center');
        return element;
    }

    printDay(e) {
        alert(`Data: ${this._day}/${this._month}/${this._year}`);
    }
    
}