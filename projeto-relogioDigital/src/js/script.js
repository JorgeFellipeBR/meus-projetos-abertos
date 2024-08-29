let hora = document.getElementById('timerHora');
let minutos = document.getElementById('timerMinutos');
let segundos = document.getElementById('timerSegundos');
let milissegundos = document.getElementById('timerMilissegundos');

const relogio = setInterval(function () {
    let newDate = new Date();
    let horaAtual = newDate.getHours();
    let minutosAtual = newDate.getMinutes();
    let segundosAtual = newDate.getSeconds();
    let milissegundosAtual = newDate.getMilliseconds();

    if (horaAtual < 10) horaAtual = '0' + horaAtual;
    if (minutosAtual < 10) minutosAtual = '0' + minutosAtual;
    if (segundosAtual < 10) segundosAtual = '0' + segundosAtual;

    hora.textContent = horaAtual;
    minutos.textContent = minutosAtual;
    segundos.textContent = segundosAtual;
    milissegundos.textContent = milissegundosAtual;

    if (horaAtual >= 6 && horaAtual <= 11) {
        document.body.classList.add('horaManha')
    } else if (horaAtual >= 12 && horaAtual <= 18) {
        document.body.classList.add('horaTarde');
    } else {
        document.body.classList.add('horaNoite');
    }
});