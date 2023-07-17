var acordeon_array = new Array();

window.onload = function () {
    acordeon_array = document.getElementsByClassName("acordeon");
    //se recore el arreglo
    for (var i = 0; i < acordeon_array.length; i++) {
        acordeon_array[i].addEventListener("click", selecciona, false);
    }

    document.getElementById("abre").onclick = function () {
        document.getElementById("miMenu").style.width = "250px"
    }

    document.getElementById("cerrarMenu").onclick= function () {
        document.getElementById("miMenu").style.width = "0";
    }
}

function selecciona() {
    this.classList.toggle("activo");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

