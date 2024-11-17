let listagemHeroi = document.querySelectorAll(".heroi");

listagemHeroi.forEach(heroi => {
    heroi.addEventListener("click", () => {
        esconderCartaoHeroi();

        return mostrarCartaoHeroiSelecionado(heroi);

        desativarHeroiNaListagem();

        ativarHeroiSelecionadoNaListagem();
    })
})

function ativarHeroiSelecionadoNaListagem() {
    const heroiSelecionadoNaListagem = document.getElementById("idHeroiSelecionado");
    heroiSelecionadoNaListagem.classList.add("ativo");
}

function desativarHeroiNaListagem() {
    const heroiAtivoNaListagem = document.querySelector(".ativo");
    heroiAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoHeroiSelecionado(heroi) {
    const idHeroiSelecionado = heroi.attributes.id.value;
    const idDoCartaoHeroiParaAbrir = "cartao-" + idHeroiSelecionado;
    const cartaoHeroiParaAbrir = document.getElementById(idDoCartaoHeroiParaAbrir);
    cartaoHeroiParaAbrir.classList.add("aberto");
    return idHeroiSelecionado;
}

function esconderCartaoHeroi() {
    const cartaoHeroiAberto = document.querySelector(".aberto");
    cartaoHeroiAberto.classList.remove("aberto");
}
