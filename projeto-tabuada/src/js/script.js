let campoNumero = document.getElementById('num');
let botao = document.getElementById('botao');
let resultado = document.getElementById('res');
let limpar = document.getElementById('limpar');

botao.addEventListener('click', function() {
    let campoNumeroValue = campoNumero.value;

    for (let i = 0; i <= 10; i++) {
        resultado.innerHTML += `<p>${campoNumeroValue} x ${i} = ${campoNumeroValue * i}</p>`;
    };

    campoNumero.value = '';
    limpar.classList.remove('limpar');
    limpar.classList.add('aparecer');

    if (campoNumeroValue == '') {
        alert('[ERRO] - O campo está vazio!');
        resultado.innerHTML = '';
        limpar.classList.add('limpar');
    };
});

limpar.addEventListener('click', function() {
    resultado.innerHTML = '';
    limpar.classList.add('limpar');
    limpar.classList.remove('aparecer');
});