let btnVoltar = document.getElementById("btn-voltar");
let btnAvançar = document.getElementById("btn-avançar");
let cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvançar.addEventListener("click", () => {
    const UltimoCartao = cartaoAtual === cartoes.length - 1;
    if (UltimoCartao) return;

    const cartaoSeleionado = document.querySelector(".selecionado");
    cartaoSeleionado.classList.remove("selecionado");

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
})

btnVoltar.addEventListener("click", () => {
    const UltimoCartao = cartaoAtual === 0;
    if (UltimoCartao) return;

    const cartaoSeleionado = document.querySelector(".selecionado");
    cartaoSeleionado.classList.remove("selecionado");

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
})
