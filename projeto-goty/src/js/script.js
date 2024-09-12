// Seleciona os elementos do DOM
let botao = document.getElementById("botao");
let pesquisar = document.getElementById("pesquisar");
let main = document.getElementById("main");

// Adiciona um ouvinte de evento ao botão
botao.addEventListener('click', function() {
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
    let pesquisarValor = pesquisar.value.toLowerCase();

    // Inicializa as variáveis para armazenar o nome do jogo e os resultados
    let nomeJogo = "";
    let resultados = "";

    // Verifica se o campo de pesquisa está vazio
    if (!pesquisarValor || pesquisarValor == " ") {
        alert("O campo de pesquisa está vazio!");
        return;
    }

    // Itera sobre o array de jogos e filtra os jogos que contém o termo pesquisado
    for (let games of jogos) {
        nomeJogo = games.nome.toLowerCase();

        if (nomeJogo.includes(pesquisarValor)) {
            // Monta o HTML para exibir o resultado da busca
            resultados = `
                <div class="jogo">
                    <h2 class="nomeJogo">${games.nome}</h2>
                    <img src="${games.capaJogo}" alt="Capa do jogo do ano" class="imagem">
                    <p class="descricaoJogo">${games.descricao}</p>
                </div>
            `;
        }
    }

    // Verifica se algum jogo foi encontrado e exibe os resultados ou uma mensagem de erro
    if (!resultados) {
        alert("Esse jogo não ganhou o GOTY!");
        main.innerHTML = "";
    } else {
        main.innerHTML = resultados;
    }
});