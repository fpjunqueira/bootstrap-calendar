
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

let year = 2019;

// TODO
// metodo para proximo mes e mes anterior

// percorre o ano
meses.forEach(function (month) {

    // cria uma div para o mês corrente
    let divMes = document.createElement('div');
    divMes.classList.add('month');
    let divNomeMes = document.createElement('div');
    let h4 = document.createElement('h4');
    h4.textContent = mesesDoAno[month];
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

    let days = CalendarHelper.getDatesToFillMonth(month, year);

    // preenche os dias do mes
    let contDia = 0;
    for (let semanaDoMes = 0; semanaDoMes < 6; semanaDoMes++) {
        let semana = document.createElement('div');
        semana.classList.add('row');
        for (let diaSemana = 0; diaSemana < 7; diaSemana++) {
            semana.appendChild(days[contDia].dayElement);
            contDia++;
        }
        divMes.appendChild(semana);
    }
    divAno.appendChild(divMes);
});