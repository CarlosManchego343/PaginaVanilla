window.onload = function() {

    document.getElementById("abre").onclick = function () {
        document.getElementById("miMenu").style.width = "250px"
    }

    document.getElementById("cerrarMenu").onclick= function () {
        document.getElementById("miMenu").style.width = "0";
    }

    cuentaAtras("Jul 17 2030 20:30:00 GMT-0500", "reloj", "Castlevania: Symphony of the night es el mejor juego");
}

function cuentaAtras(fechaFinal, elem, mensaje) {
    var reloj = document.getElementById(elem);
    var idReloj = setInterval(function () {
        var t = despliegaReloj(fechaFinal);
        reloj.innerHTML = t.horasRestantes + " Horas:" + t.minutosRestantes + " Minutos:" + t.segundosRestantes + " Segundos " + t.diasRestantes + " dias";
        if (t.tiempoRestante <= 1) {
            clearInterval(idReloj);
            reloj.innerHTML = mensaje;
        }
    }, 1000);
}

function despliegaReloj(fechaFinal) {
    var now = new Date();
    var tiempoRestante = (new Date(fechaFinal) - now + 1000) / 1000;
    var segundosRestantes = ('0' + Math.floor(tiempoRestante % 60)).slice(-2);
    var minutosRestantes = ('0' + Math.floor(tiempoRestante / 60 % 60)).slice(-2);
    var horasRestantes = ('0' + Math.floor(tiempoRestante / 3600 % 24)).slice(-2);
    var diasRestantes = Math.floor(tiempoRestante / (3600 * 24));

    return {
        tiempoRestante: tiempoRestante,
        segundosRestantes: segundosRestantes,
        minutosRestantes: minutosRestantes,
        horasRestantes: horasRestantes,
        diasRestantes: diasRestantes
    }
}