let botao = document.getElementById('botao');
let generoMasculino = document.getElementById('generoMasculino');
let generoFeminino = document.getElementById('generoFeminino');
let campoInput = document.getElementById('idade');
let texto = document.getElementById('texto');
let imagem = document.getElementById('imagemFoto');

botao.addEventListener('click', function() {
    let campoInputValor = parseInt(campoInput.value);

    if (generoMasculino.checked && campoInputValor <= 13) {
        imagem.src = 'crianca-menino(0-13).jpg';
        texto.innerHTML = 'Você é um menino criança';
    } else if (generoFeminino.checked && campoInputValor <= 13) {
        imagem.src = 'crianca-menina(0-13).jpg';
        texto.innerHTML = 'Você é uma menina criança';
    } else if (generoMasculino.checked && campoInputValor >= 14 && campoInputValor <= 21) {
        imagem.src = 'adolescente-homem(14-21).jpg';
        texto.innerHTML = 'Você é um homem adolescente';
    } else if (generoFeminino.checked && campoInputValor >= 14 && campoInputValor <= 21) {
        imagem.src = 'adolescente-mulher(14-21).jpg';
        texto.innerHTML = 'Você é uma mulher adolescente';
    } else if (generoMasculino.checked && campoInputValor >= 22 && campoInputValor <= 50) {
        imagem.src = 'adulto-homem(22-50).jpg';
        texto.innerHTML = 'Você é um homem adulto';
    } else if (generoFeminino.checked && campoInputValor >= 22 && campoInputValor <= 50) {
        imagem.src = 'adulta-mulher(22-50).jpg';
        texto.innerHTML = 'Você é uma mulher adulta';
    } else if (generoMasculino.checked && campoInputValor >= 51) {
        imagem.src = 'idoso-homem(51).jpg';
        texto.innerHTML = 'Você é um homem idoso';
    } else if (generoFeminino.checked && campoInputValor >= 51) {
        imagem.src = 'idosa-mulher(51).jpg';
        texto.innerHTML = 'Você é uma mulher idosa';
    } else {
        alert('[ERRO] Os campos estão vazios!')
    }
});
