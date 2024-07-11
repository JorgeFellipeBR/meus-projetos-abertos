let seusPedidos = document.getElementById('seusPedidos');
let listaPedidos = document.getElementById('listaPedidos');
let remover = document.getElementById('remover');
let hamburger = document.getElementById('hamburger');
let lasanha = document.getElementById('lasanha');
let macarrao = document.getElementById('macarrao');
let sorvete = document.getElementById('sorvete');
let panqueca = document.getElementById('panqueca');
let salada = document.getElementById('salada');
let contador = 0;

if (seusPedidos && listaPedidos && remover) {
    seusPedidos.addEventListener('click', function() {
        listaPedidos.classList.add('adicionar');
    });
    
    remover.addEventListener('click', function() {
        listaPedidos.classList.remove('adicionar');
    });
}

hamburger.addEventListener('click', function() {
    const nomeComida = 'HAMBURGUER VEGETARIANO';
    contador++;

    listaPedidos.innerHTML += `<div class="pedido" id="${contador}">
            <p class="titulo-pedido" id="pedido">${nomeComida}</p>
            <button class="botao" onclick="removerPedido(${contador})"><i class="material-symbols-outlined">delete</i></button>
        </div>`;
});
    
lasanha.addEventListener('click', function() {
    const nomeComida = 'LASANHA VEGETARIANA';
    contador++;

    listaPedidos.innerHTML += `<div class="pedido" id="${contador}">
            <p class="titulo-pedido" id="pedido">${nomeComida}</p>
            <button class="botao" onclick="removerPedido(${contador})"><i class="material-symbols-outlined">delete</i></button>
        </div>`;
});

macarrao.addEventListener('click', function() {
    const nomeComida = 'MACARRÃO AO MOLHO';
    contador++;

    listaPedidos.innerHTML += `<div class="pedido" id="${contador}">
            <p class="titulo-pedido" id="pedido">${nomeComida}</p>
            <button class="botao" onclick="removerPedido(${contador})"><i class="material-symbols-outlined">delete</i></button>
        </div>`;
});

sorvete.addEventListener('click', function() {
    const nomeComida = 'SORVETE';
    contador++;

    listaPedidos.innerHTML += `<div class="pedido" id="${contador}">
            <p class="titulo-pedido" id="pedido">${nomeComida}</p>
            <button class="botao" onclick="removerPedido(${contador})"><i class="material-symbols-outlined">delete</i></button>
        </div>`;
});

panqueca.addEventListener('click', function() {
    const nomeComida = 'PANQUECA DOCE';
    contador++;

    listaPedidos.innerHTML += `<div class="pedido" id="${contador}">
            <p class="titulo-pedido" id="pedido">${nomeComida}</p>
            <button class="botao" onclick="removerPedido(${contador})"><i class="material-symbols-outlined">delete</i></button>
        </div>`;
});

salada.addEventListener('click', function() {
    const nomeComida = 'SALADA VEGANA';
    contador++;

    listaPedidos.innerHTML += `<div class="pedido" id="${contador}">
            <p class="titulo-pedido" id="pedido">${nomeComida}</p>
            <button class="botao" onclick="removerPedido(${contador})"><i class="material-symbols-outlined">delete</i></button>
        </div>`;
});

function removerPedido(id) {
    let deletar = document.getElementById(id);
    deletar.remove();
}