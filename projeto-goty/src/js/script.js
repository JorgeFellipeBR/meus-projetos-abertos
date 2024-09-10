let botao = document.getElementById("botao");
let pesquisar = document.getElementById("pesquisar");
let main = document.getElementById("main");

botao.addEventListener('click', function() {
    let pesquisarValor = pesquisar.value.toLowerCase();
    let nomeJogo = "";
    let resultados = "";

    for (let games of jogos) {
        nomeJogo = games.nome.toLowerCase();
        descricao = games.descricao.toLowerCase();

        if (nomeJogo.includes(pesquisarValor)) {
            resultados = `
                <div class="jogo">
                    <h2 class="nomeJogo">${games.nome}</h2>
                    <img src="${games.capaJogo}" alt="Capa do jogo do ano" class="imagem">
                    <p class="descricaoJogo">${games.descricao}</p>
                </div>
            `;
        };
    };
    main.innerHTML = resultados;
});