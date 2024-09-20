let abrirSidebar = document.getElementById("abrirSidebar");
let fecharSidebar = document.getElementById("fecharSidebar");
let sidebar = document.getElementById("sidebar");

abrirSidebar.addEventListener("click", function() {
    sidebar.style.width = "300px";
});

fecharSidebar.addEventListener("click", function() {
    sidebar.style.width = "0px";
});
