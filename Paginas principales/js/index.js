function despliega(img) {
    var imagen = document.getElementById("imagen");
    var texto = document.getElementById("texto");
    imagen.src = img.src;
    texto.innerHTML = img.alt;
    imagen.parentElement.style.display = "block";
}