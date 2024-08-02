let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let somar = document.getElementById('somar');
let subtrair = document.getElementById('subtrair');
let multiplicar = document.getElementById('multiplicar');
let dividir = document.getElementById('dividir');
let resposta = document.getElementById('res');

somar.addEventListener('click', function() {
    let calculo = Number(n1.value) + Number(n2.value);
    resposta.innerHTML = `O resultado é ${calculo}!`;

    if (n1.value === '' || n2.value === '') {
        alert('Verifique os campos!');
        resposta.innerHTML = '';
    };

    n1.value = '';
    n2.value = '';

});

subtrair.addEventListener('click', function() {
    let calculo = Number(n1.value) - Number(n2.value);
    resposta.innerHTML = `O resultado é ${calculo}!`;

    if (n1.value === '' || n2.value === '') {
        alert('Verifique os campos!');
        resposta.innerHTML = '';
    };

    n1.value = '';
    n2.value = '';
});

multiplicar.addEventListener('click', function() {
    let calculo = Number(n1.value) * Number(n2.value);
    resposta.innerHTML = `O resultado é ${calculo}!`;

    if (n1.value === '' || n2.value === '') {
        alert('Verifique os campos!');
        resposta.innerHTML = '';
    };

    n1.value = '';
    n2.value = '';
});

dividir.addEventListener('click', function() {
    let calculo = Number(n1.value) / Number(n2.value);
    resposta.innerHTML = `O resultado é ${calculo}!`;

    if (n1.value === '' || n2.value === '') {
        alert('Verifique os campos!');
        resposta.innerHTML = '';
    };

    n1.value = '';
    n2.value = '';
});