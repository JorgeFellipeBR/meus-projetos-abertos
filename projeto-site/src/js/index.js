let abrirSidebar = document.getElementById("abrirSidebar");
let fecharSidebar = document.getElementById("fecharSidebar");
let tema = document.getElementById("tema");
let cor = document.querySelectorAll("#cor");
let termosServicos = document.getElementById("termosServicos");
let termos = document.getElementById("termos");
let remover = document.getElementById("remover");
let sidebar = document.getElementById("sidebar");

abrirSidebar.addEventListener("click", function() {
    sidebar.style.width = "300px";
});

fecharSidebar.addEventListener("click", function() {
    sidebar.style.width = "0px";
});

tema.addEventListener("click", function() {
    if (tema.checked) {
        document.body.style.backgroundColor = "black";
        cor.forEach(cores => {
            cores.style.color = "white";
        })
    } else {
        document.body.style.backgroundColor = "rgb(218, 218, 218)";
        cor.forEach(cores => {
            cores.style.color = "black";
        })
    }
})

termosServicos.addEventListener("click", function() {
    termos.classList.add("aparecer");
    termos.classList.remove("termos")
    sidebar.style.width = "0px";
});

remover.addEventListener("click", function() {
    termos.classList.add("termos");
    termos.classList.remove("aparecer")
});