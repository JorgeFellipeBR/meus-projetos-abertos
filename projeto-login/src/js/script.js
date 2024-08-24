let contrato = document.getElementById('contrato');
let contratoUso = document.getElementById('contratoUso');
let fechar = document.getElementById('fechar');

contrato.addEventListener('click', function() {
    contratoUso.classList.remove('contratoUso');
    contratoUso.classList.add('aparecer');
});

fechar.addEventListener('click', function() {
    contratoUso.classList.remove('aparecer');
    contratoUso.classList.add('contratoUso');
});