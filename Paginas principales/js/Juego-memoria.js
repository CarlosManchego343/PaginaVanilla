/*************
 V A R I A B L E S
**************/

var cartas = new Array(
    { nombre: '1', seleccion: false },
    { nombre: '2', seleccion: false },
    { nombre: '3', seleccion: false },
    { nombre: '4', seleccion: false },
    { nombre: '5', seleccion: false },
    { nombre: '6', seleccion: false },
    { nombre: '7', seleccion: false },
    { nombre: '8', seleccion: false },

    { nombre: '1', seleccion: false },
    { nombre: '2', seleccion: false },
    { nombre: '3', seleccion: false },
    { nombre: '4', seleccion: false },
    { nombre: '5', seleccion: false },
    { nombre: '6', seleccion: false },
    { nombre: '7', seleccion: false },
    { nombre: '8', seleccion: false }
)

var intentos = 0;
var jugada1 = jugada2 = "";
var identificadorJ1 = identificadorJ2 = "";
var numFichas = 16;

window.onload = function () {

    document.getElementById("abre").onclick = function () {
        document.getElementById("miMenu").style.width = "250px"
    }

    document.getElementById("cerrarMenu").onclick= function () {
        document.getElementById("miMenu").style.width = "0";
    }

    document.getElementById("iniciar").onclick = iniciarJuego;

    for (let i = 0; i < numFichas; i++) {
        document.getElementById(i.toString()).onclick = girarCarta;
    }
}

function iniciarJuego() {
    
    // Modificar el tablero

    var dato = document.getElementById("juego");
    dato.style.opacity = 1;

    // Ocultar boton

    document.getElementById("iniciar").style.display = "none";

    // Barajando las cartas

    cartas.sort(function () {
        return Math.random() - 0.5
    });

    console.log(cartas);

    for (let i = 0; i < numFichas; i++) {
        var carta = cartas[i].nombre;
        var data = document.getElementById(i.toString());
        data.dataset.valor = carta;
    }
}

function girarCarta() {
    var evento = window.event;
    jugada2 = evento.target.dataset.valor;
    identificadorJ2 = evento.target.id;

    // Se selecciono la segunda carta
    if (jugada1 !== "") {

        //Son iguales las cartas

        if (jugada1 === jugada2 &&
            cartas[parseInt(identificadorJ2)].seleccion != true &&
            cartas[parseInt(identificadorJ1)].seleccion != true) {

            cartas[parseInt(identificadorJ2)].seleccion = true
            cartas[parseInt(identificadorJ1)].seleccion = true

            cambiaColor(identificadorJ2, "#6200EA", jugada2);

            limpiarVariables();
            verficar();

        } else if(identificadorJ1 != identificadorJ2) {
            setTimeout(function () {
                cambiaColor(identificadorJ1, "brown", "?");
                cambiaColor(identificadorJ2, "brown", "?");
                limpiarVariables();
            }, 500);
            cambiaColor(identificadorJ2, "#6200EA", jugada2);
        }

    } else if (jugada2 !== "void") {
        cambiaColor(identificadorJ2, "#6200EA", jugada2);
        jugada1 = jugada2;
        identificadorJ1 = identificadorJ2;
    }
}

function cambiaColor(posicion, color, numero) {

    document.getElementById(posicion.toString()).style.backgroundColor = color;
    document.getElementById(posicion.toString()).innerHTML = numero;
}

function limpiarVariables() {
    jugada1 = jugada2 = "";
    identificadorJ1 = identificadorJ2 = "";
}

function verficar() {
    let aciertos = 0;
    for (let i = 0; i < numFichas; i++) {
        if(cartas[i].seleccion == true) {
            aciertos++;
        }
    } 

    if(aciertos == numFichas) {
        alert("Felicidades wapo :D");
    }
}