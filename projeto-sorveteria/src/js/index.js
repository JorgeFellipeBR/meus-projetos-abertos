let sorvetes = document.querySelectorAll(".botao");
let areaPedidos = document.getElementById("pedidos");
let contador = 0;

sorvetes.forEach(sorvete => {
    sorvete.addEventListener("click", () => {
        contador++;

        areaPedidos.innerHTML += `
        <div class="pedido" id="${contador}">
        <img class="imagemPedido" src="src/images/chocolate.jpg" alt="">
        <p class="nomeSorvete" id="nomeSorvete">Chocolate</p>
        <button class="remover" onclick="remover(${contador})"><span class="material-symbols-outlined">delete</span></button>
    `;
    })
})

function remover(id) {
    let elemento = document.getElementById(id);
    elemento.remove();
}