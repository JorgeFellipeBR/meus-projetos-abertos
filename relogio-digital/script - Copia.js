const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const millisegundos = document.getElementById('millisegundos')

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let seg = dateToday.getSeconds()
    let mls = dateToday.getMilliseconds()

    if (hr < 10) hr = '0' + hr

    if (min < 10) min = '0' + min

    if (seg < 10) seg = '0' + seg

    if (mls < 10) mls = '00' + mls
    if (mls < 100) mls = '0' + mls

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    millisegundos.textContent = mls
})