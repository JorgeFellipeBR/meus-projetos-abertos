let btnVoltar = document.getElementById("btn-esquerda");
let btnAvancar = document.getElementById("btn-direita");
let cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", () => {
    const UltimoCartao = cartaoAtual === cartoes.length - 1;
    if(UltimoCartao) return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});

btnVoltar.addEventListener("click", () => {
    const UltimoCartao = cartaoAtual === 0;
    if(UltimoCartao) return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
})