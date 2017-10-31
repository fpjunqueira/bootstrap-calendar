/**
 *  Model 
 */
class DateModel {
    constructor(year, month, day, isOutDay, isHoliday, isToday) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.isOutDay = isOutDay;
        this.isHoliday = isHoliday;
        this.isToday = isToday;
        
        //  deverá calcular se emenda o feriado
        // this.isExtendedHoliday = isExtendedHoliday;

        // extrair para DayView
        this.dayElement = document.createElement('p');
        this.dayElement.textContent = day;
        this.dayElement.classList.add('day');
        if (isOutDay) {
            this.dayElement.classList.add('outDay');
        }
        if (isHoliday) {
            this.dayElement.classList.add('holiday');
        }
        if (isToday && !isOutDay) {
            this.dayElement.classList.add('today');
        }
        
        this.dayElement.classList.add('monthTitle');
        this.dayElement.addEventListener("click", e => this.printDay(e));
    }

    printDay(e) {
        console.log(`Data: ${this.day}/${this.month}/${this.year}`);
    }

}

/**
 * View
 */
let diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
let mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


/**
 * Controller
 */
let meses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let divAno = document.querySelector('#ano');
meses.forEach(function (mes) {

    // cria uma div para o mês corrente
    let divMes = document.createElement('div');
    divMes.classList.add('month');

    let divNomeMes = document.createElement('div');
    let h4 = document.createElement('h4');
    h4.textContent = mesesDoAno[mes];
    divNomeMes.classList.add('col-md-12');
    divNomeMes.classList.add('text-center');
    divNomeMes.appendChild(h4);

    divMes.appendChild(divNomeMes);

    // preenche nomes dos dias da semana
    let diasDasemana = document.createElement('div');
    diasDasemana.classList.add('row');
    for (let diaDaSemana = 0; diaDaSemana < diasDaSemana.length; diaDaSemana++) {
        let dia = document.createElement('p');
        dia.classList.add('day');
        dia.textContent = diasDaSemana[diaDaSemana];
        diasDasemana.appendChild(dia);
    }
    divMes.appendChild(diasDasemana);

    let dias = getDates(mes, 2017);

    let contDia = 0;
    for (let semanaDoMes = 0; semanaDoMes < 6; semanaDoMes++) {
        let semana = document.createElement('div');
        semana.classList.add('row');
        for (let diaSemana = 0; diaSemana < 7; diaSemana++) {
            semana.appendChild(dias[contDia].dayElement);
            contDia++;
        }
        divMes.appendChild(semana);
    }
    divAno.appendChild(divMes);
});

/**
 * Helper
 * 
 * @param {*} month 
 * @param {*} year 
 */
function getDates(month, year) {
    let dates = [];
    let dayCont = 0;

    let date = lastSundayOfLastMonth(moment([year, month]));
    while (dayCont < 42) {
        date.add(1, 'day');

        let isCurrentMonth = false;
        if (date.month() != month) {
            isCurrentMonth = true;
        }

        let isHoliday = false;
        if (Math.floor((Math.random() * 10) + 1) == 5) {
            isHoliday = true;
        }        

        let isToday = false;
        if (date.year() == moment().year() && date.date() == moment().date() && date.month() == moment().month()) {
            isToday = true;
        }

        dates.push(new DateModel(date.year(), date.month(), date.date(), isCurrentMonth, isHoliday, isToday));
        dayCont++;
    }
    return dates;
}
/**
 * @param {*} month 
 */
function lastSundayOfLastMonth(month) {
    let date = month.subtract(1, 'months').endOf('month');
    let saturday = 6;
    while (date.day() != saturday) {
        date.subtract(1, 'day');
    }
    return date;
}