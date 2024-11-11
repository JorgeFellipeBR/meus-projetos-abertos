let abrirSidebar = document.getElementById("abrirSidebar");
let fecharSidebar = document.getElementById("fecharSidebar");
let sidebar = document.getElementById("sidebar");
let mudarCor = document.getElementById("cor");
let cor = document.querySelectorAll("#color");

abrirSidebar.addEventListener("click", () => {
    sidebar.style.width = "250px";
});

fecharSidebar.addEventListener("click", () => {
    sidebar.style.width = "0px";
});

mudarCor.addEventListener("click", () => {
    if (mudarCor.checked) {
        cor.forEach(mudaCor => {
            mudaCor.style.color = "white";
        });
        document.body.style.backgroundColor = "black";
    } else {
        cor.forEach(mudaCor => {
            mudaCor.style.color = "black";
        });
        document.body.style.backgroundColor = "white";
    }
});