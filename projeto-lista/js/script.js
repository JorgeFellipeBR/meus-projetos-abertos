let campoTexto = document.getElementById('txt');
let areaMarca = document.getElementById('areaMarcaId');
let botao = document.getElementById('botaoId')
let contador = 0;

function Adicionar() {
    let campoTextoValue = campoTexto.value;

    if ((campoTextoValue !== '') && (campoTextoValue !== null) && (campoTextoValue !== undefined)) {
        ++contador

    areaMarca.innerHTML += `<div class="lista" id="${contador}">
        <p>
            ${campoTextoValue}
        </p>
        <button id="btn" onclick="deletar(${contador})">
        <span class="material-symbols-outlined">
        delete
        </span>
        </button>
    </div>`

    campoTexto.value = '';
    }
}

function deletar(id) {
    var lista = document.getElementById(id);
    lista.remove();
}

campoTexto.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        botao.click();
    }
})
