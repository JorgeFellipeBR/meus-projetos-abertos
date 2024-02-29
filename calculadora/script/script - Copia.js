function somar() {
    var txtn1 = document.getElementById('itxtn1')
    var txtn2 = document.getElementById('itxtn2')
    var res = document.getElementById('res')
    var n1 = Number(itxtn1.value)
    var n2 = Number(itxtn2.value)
    var x = n1 + n2

    txtn1.value = ''
    txtn2.value = ''

    res.innerHTML = `O resultado é ${x}`

    if (n1 == '') {
        alert('[ERRO] O primeiro campo está vazio!')
        res.innerHTML = 'Resultado'
    } else if (n2 == '') {
        alert('[ERRO] O segundo campo está vazio!')
        res.innerHTML = 'Resultado'
    }
}

function subtrair() {
    var txtn1 = document.getElementById('itxtn1')
    var txtn2 = document.getElementById('itxtn2')
    var res = document.getElementById('res')
    var n1 = Number(itxtn1.value)
    var n2 = Number(itxtn2.value)
    var x = n1 - n2

    txtn1.value = ''
    txtn2.value = ''

    res.innerHTML = `O resultado é ${x}`

    if (n1 == '') {
        alert('[ERRO] O primeiro campo está vazio!')
        res.innerHTML = 'Resultado'
    } else if (n2 == '') {
        alert('[ERRO] O segundo campo está vazio!')
        res.innerHTML = 'Resultado'
    }
}

function multiplicar() {
    var txtn1 = document.getElementById('itxtn1')
    var txtn2 = document.getElementById('itxtn2')
    var res = document.getElementById('res')
    var n1 = Number(itxtn1.value)
    var n2 = Number(itxtn2.value)
    var x = n1 * n2

    txtn1.value = ''
    txtn2.value = ''

    res.innerHTML = `O resultado é ${x}`

    if (n1 == '') {
        alert('[ERRO] O primeiro campo está vazio!')
        res.innerHTML = 'Resultado'
    } else if (n2 == '') {
        alert('[ERRO] O segundo campo está vazio!')
        res.innerHTML = 'Resultado'
    }
}

function dividir() {
    var txtn1 = document.getElementById('itxtn1')
    var txtn2 = document.getElementById('itxtn2')
    var res = document.getElementById('res')
    var n1 = Number(itxtn1.value)
    var n2 = Number(itxtn2.value)
    var x = n1 / n2

    txtn1.value = ''
    txtn2.value = ''

    res.innerHTML = `O resultado é ${x}`

    if (n1 == '') {
        alert('[ERRO] O primeiro campo está vazio!')
        res.innerHTML = 'Resultado'
    } else if (n2 == '') {
        alert('[ERRO] O segundo campo está vazio!')
        res.innerHTML = 'Resultado'
    }
}