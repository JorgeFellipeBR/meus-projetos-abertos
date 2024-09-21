let botaoMostrar = document.getElementById("botaoMostrar");
let exemplosImg = document.querySelectorAll(".exemplosImg:not(.ativo)");

botaoMostrar.addEventListener("click", function() {
    mostrarBotao();
    esconderBotao();
});

function mostrarBotao() {
    exemplosImg.forEach(imagens => {
        imagens.classList.add("ativo");
    })
};

function esconderBotao() {
    botaoMostrar.style.display = "none";
}