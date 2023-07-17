window.onload = function () {
    document.getElementById("abre").onclick = function () {
        document.getElementById("miMenu").style.width = "250px"
    }

    document.getElementById("cerrarMenu").onclick= function () {
        document.getElementById("miMenu").style.width = "0";
    }
}
