let menu = document.getElementById("menu");
let fecharSidebar = document.getElementById("fecharSidebar");
let sibebar = document.getElementById("sidebar");
let tema = document.getElementById("tema");
let botaoTema = document.getElementById("botaoTema");

menu.addEventListener("click", () => {
    sibebar.style.width = "250px";
})

fecharSidebar.addEventListener("click", () => {
    sibebar.style.width = "0px";
})

tema.addEventListener("click", () => {
    if (tema.checked) {
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "white";
    }
})