window.onload = function () {
    document.getElementById("abre").onclick = function () {
        document.getElementById("miMenu").style.width = "250px"
    }

    document.getElementById("cerrarMenu").onclick= function () {
        document.getElementById("miMenu").style.width = "0";
    }
}


function despliega(img) {
    var imagen = document.getElementById("imagen");
    var texto = document.getElementById("texto");
    imagen.src = img.src;
    texto.innerHTML = img.alt;
    imagen.parentElement.style.display = "block";
}

