let botao = document.getElementById("botao");
let botaoNovo = document.getElementById("botaoNovo");
let campoTexto = document.getElementById("campoTexto");
let novoTexto = document.getElementById("novoTexto");
let tarefas = document.getElementById("tarefas");
let tarefaTexto = document.getElementById("tarefaTexto");
let remover = document.getElementById("remover");
let eliminar = document.getElementById("eliminar");
let container = document.getElementById("container");

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
                <span class="tarefaTexto" id="campo-${contador}">${campoTextoValor}</span>
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

        let idCampo = "campo-" + contador;
        let n = document.getElementById(idCampo);
        botaoNovo.addEventListener("click", () => {
            let novoTextoValor = novoTexto.value;
            n.innerHTML = novoTextoValor;
            container.classList.remove("aparecer");
            novoTexto.value = "";
        })
    }

    let x = "editar"
    let editar = document.querySelectorAll("#"+x);

    editar.forEach((a) => {
        a.addEventListener("click", () => {
            container.classList.add("aparecer");
        })
    })
})

eliminar.addEventListener("click", () => {
    container.classList.remove("aparecer");
})


function eliminarElemento(removerElemento) {
    let remove = document.getElementById(removerElemento);
    remove.remove();
}