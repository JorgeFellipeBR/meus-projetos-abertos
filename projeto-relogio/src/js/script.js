let idHora = document.getElementById("hora");
let idMinutos = document.getElementById("minutos");
let idSegundos = document.getElementById("segundos");
let idMilissegundos = document.getElementById("milissegundos");

const relogio = setInterval(() => {
    const newDate = new Date();
    let hora = newDate.getHours();
    let minutos = newDate.getMinutes();
    let segundos = newDate.getSeconds();
    let milissegundos = newDate.getMilliseconds();

    if (hora < 10) hora = "0" + hora;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    if (hora > 19 && hora < 6) {
        document.body.style.backgroundColor = "blue";
    } else if (hora > 6 && hora < 12) {
        document.body.style.backgroundColor = "yellow";
    } else if (hora > 12 && hora < 19) {
        document.body.style.backgroundColor = "orange";
    }

    idHora.textContent = hora;
    idMinutos.textContent = minutos;
    idSegundos.textContent = segundos;
    idMilissegundos.textContent = milissegundos;
});