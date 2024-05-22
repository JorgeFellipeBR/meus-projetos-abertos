const hora = document.getElementById('idHora');
const minutos = document.getElementById('idMinutos');
const segundos = document.getElementById('idSegundos');
const milissegundos = document.getElementById('idMilissegundos');

const relogio = setInterval(function () {
    let dateDay = new Date();
    let hr = dateDay.getHours();
    let min = dateDay.getMinutes();
    let seg = dateDay.getSeconds();
    let mil = dateDay.getMilliseconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    hora.textContent = hr;
    minutos.textContent = min
    segundos.textContent = seg;
    milissegundos.textContent = mil;
});