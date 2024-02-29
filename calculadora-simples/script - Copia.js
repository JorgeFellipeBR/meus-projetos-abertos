function somar() {
    let txt1 = document.getElementById('txtn1')
    let txt2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let n1 = Number(txtn1.value)
    let n2 = Number(txtn2.value)
    let x = n1 + n2

    txt1.value = ''
    txt2.value = ''
    res.innerHTML = `O resultado é ${x}`

    if (n1 == '' || n2 == '') {
        alert('[ERRO] Verifique os dados e tente novamente!')
        res.innerHTML = 'Resultado'
    }
}

function subtrair() {
    let txt1 = document.getElementById('txtn1')
    let txt2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let n1 = Number(txtn1.value)
    let n2 = Number(txtn2.value)
    let x = n1 - n2

    txt1.value = ''
    txt2.value = ''
    res.innerHTML = `O resultado é ${x}`

    if (n1 == '' || n2 == '') {
        alert('[ERRO] Verifique os dados e tente novamente!')
        res.innerHTML = 'Resultado'
    }
}

function multiplicar() {
    let txt1 = document.getElementById('txtn1')
    let txt2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let n1 = Number(txtn1.value)
    let n2 = Number(txtn2.value)
    let x = n1 * n2

    txt1.value = ''
    txt2.value = ''
    res.innerHTML = `O resultado é ${x}`

    if (n1 == '' || n2 == '') {
        alert('[ERRO] Verifique os dados e tente novamente!')
        res.innerHTML = 'Resultado'
    }
}

function dividir() {
    let txt1 = document.getElementById('txtn1')
    let txt2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let n1 = Number(txtn1.value)
    let n2 = Number(txtn2.value)
    let x = n1 / n2

    txt1.value = ''
    txt2.value = ''
    res.innerHTML = `O resultado é ${x}`

    if (n1 == '' || n2 == '') {
        alert('[ERRO] Verifique os dados e tente novamente!')
        res.innerHTML = 'Resultado'
    }
}