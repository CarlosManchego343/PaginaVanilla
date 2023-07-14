function muestra(e, num) {
    var contenido_array = document.getElementsByClassName("contenido");
    for (let i = 0; i < contenido_array.length; i++) {
        contenido_array[i].style.display = "none";
    }
    document.getElementById("foto" + num).style.display = "block";
}