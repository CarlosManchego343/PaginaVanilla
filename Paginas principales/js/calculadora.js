window.onload = function () {
    
    var signos = "+-*/";
    var x = new Array();
    
    document.getElementById("abre").onclick = function () {
        document.getElementById("miMenu").style.width = "250px"
    }

    document.getElementById("cerrarMenu").onclick = function () {
        document.getElementById("miMenu").style.width = "0";
    }

    document.getElementById("valores").onkeypress = function (event) {
        return numeros(event);
    }

    x = document.querySelectorAll("input[type=button");

    for (let i = 0; i < x.length; i++) {
        x[i].onclick = function() {
            let n = this.value;
            if (n == "C") {
                borrar();
            } else if (n == "<") {
                borrarCaracter();
            } else if (n == "=") {
                calcular();
            } else if(signos.indexOf(n) > -1) {
                validarSigno();
            } else {
                regresar();
            }
        }
    }
}

function numeros(e) {

    let tecla = e.keyCode;
    let teclado = String.fromCharCode(tecla);
    let especiales = new Array();

    especiales["backspace"] = 8;
    especiales["izquierda"] = 37;
    especiales["derecha"] = 39;

    let bandera = false;
    let numeros = "0123456789.";
    //
    bandera = especiales.includes(tecla);

    if (numeros.indexOf(teclado) == -1 && bandera == false) {
        return false;
    }
}

function borrar() {
    console.log("Borrar");
}

function borrarCaracter() {
    console.log("Borrar caracter");
}

function calcular() {
    console.log("Calcular");
}

function validarSigno() {
    console.log("Validar signo");
}

function regresar() {
    console.log("Regresar");
}