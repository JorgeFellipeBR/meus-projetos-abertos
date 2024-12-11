let icones = document.querySelectorAll(".icone");

icones.forEach(iconesPersonagem => {
    iconesPersonagem.addEventListener("click", () => {
        esconderCartao();
        
        const idDoIconeSelecionado = mostrarCartaoSelecionado(iconesPersonagem);

        desativarIconeNaListagem();
        ativarIconeNaListagem(idDoIconeSelecionado);
    })
});

function ativarIconeNaListagem(idDoIconeSelecionado) {
    const idIconeDoCartaoSelecionado = document.getElementById(idDoIconeSelecionado);
    idIconeDoCartaoSelecionado.classList.add("ativo");
}

function desativarIconeNaListagem() {
    const ativoNaListagem = document.querySelector(".ativo");
    ativoNaListagem.classList.remove("ativo");
}

function mostrarCartaoSelecionado(iconesPersonagem) {
    let idDoIconeSelecionado = iconesPersonagem.attributes.id.value;
    let cartaoSelecionado = "cartao-" + idDoIconeSelecionado;
    let idDoCartaoSelecionado = document.getElementById(cartaoSelecionado);
    idDoCartaoSelecionado.classList.add("selecionado");
    return idDoIconeSelecionado;
}

function esconderCartao() {
    let cartao = document.querySelector(".selecionado");
    cartao.classList.remove("selecionado");
}

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    audio.muted = true;
    audio.play();

    // Detecta a interação do usuário para desmutar e tocar o áudio
    document.addEventListener('click', function () {
        audio.muted = false;
        audio.play();
        audio.volume = 0.05;
    }, { once: true }); // Apenas executa uma vez
});