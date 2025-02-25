let botao = document.getElementById("botao");
let campoTexto = document.getElementById("campoTexto");
let tarefas = document.getElementById("tarefas");
let tarefaTexto = document.getElementById("tarefaTexto");
let editar = document.getElementById("editat");
let remover = document.getElementById("remover");
let contador = 0;

botao.addEventListener("click", () => {
    let campoTextoValor = campoTexto.value;
    campoTexto.value = "";

    if (campoTextoValor != "" && campoTextoValor != null && campoTextoValor != undefined) {

        contador++;

        let novoItem = `
            <div class="tarefa" id="${contador}">
                <div class="radio">
                    <input type="checkbox" name="trf" onclick="marcaTarefa(${contador})">
                </div>
                <span class="tarefaTexto" id="tarefaTexto">${campoTextoValor}</span>
                <button class="editar" id="editar">
                    <span class="material-symbols-outlined">
                        edit_note
                    </span>
                </button>
                <button class="remover" onclick="(eliminarElemento(${contador}))">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>
        `;

        tarefas.innerHTML += novoItem;
    }
})

function eliminarElemento(removerElemento) {
    let remove = document.getElementById(removerElemento);
    remove.remove();
}
