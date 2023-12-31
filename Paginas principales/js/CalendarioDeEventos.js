var eventos = [
    {
        "id": 1,
        "sala": "Sala 1",
        "organizador": "Carlos Mario Manchego Pabón",
        "documentoOrganizador": 111,
        "titulo": "Celebración de fin de año",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "20:50",
        "horaFin": "22:30",
        "fecha": "2023-12-31",
        "tipoEvento": "CELEBRACION"
    },
    {
        "id": 2,
        "sala": "Sala 1",
        "organizador": "Sebastian Duerr",
        "documentoOrganizador": 222,
        "titulo": "Celebración de cumpleaños",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "8:00",
        "horaFin": "9:30",
        "fecha": "2023-12-31",
        "tipoEvento": "CELEBRACION"
    },
    {
        "id": 3,
        "sala": "Sala 1",
        "organizador": "Masayoshi Fukumoto",
        "documentoOrganizador": 333,
        "titulo": "Celebración de BabyShower",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "10:00",
        "horaFin": "13:00",
        "fecha": "2023-12-31",
        "tipoEvento": "CELEBRACION"
    },
    {
        "id": 4,
        "sala": "Sala 2",
        "organizador": "Runa Iida",
        "documentoOrganizador": 444,
        "titulo": "Celebración de 15 años",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "10:00",
        "horaFin": "18:00",
        "fecha": "2023-12-31",
        "tipoEvento": "CELEBRACION"
    },
    {
        "id": 5,
        "sala": "Sala 2",
        "organizador": "Seymour Labrecque",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "documentoOrganizador": 555,
        "titulo": "Funeral",
        "horaInicio": "20:20",
        "horaFin": "22:40",
        "fecha": "2023-12-31",
        "tipoEvento": "FUNERAL"
    },
    {
        "id": 6,
        "sala": "Sala 2",
        "organizador": "Eric Lecarde",
        "documentoOrganizador": 666,
        "titulo": "Curso: Manejo de lanzas",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "6:00",
        "horaFin": "9:20",
        "fecha": "2023-12-31",
        "tipoEvento": "CURSO"
    },
    {
        "id": 7,
        "sala": "Sala 3",
        "organizador": "Trevor Belmont",
        "documentoOrganizador": 777,
        "titulo": "Curso: Defenza contra demonios con latigo",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "6:00",
        "horaFin": "9:20",
        "fecha": "2023-12-31",
        "tipoEvento": "CURSO"
    },
    {
        "id": 8,
        "sala": "Sala 3",
        "organizador": "Sypha Velnades",
        "documentoOrganizador": 888,
        "titulo": "Curso: Defenza contra demonios con magia arcana",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "10:00",
        "horaFin": "14:50",
        "fecha": "2023-12-31",
        "tipoEvento": "CURSO"
    },
    {
        "id": 9,
        "sala": "Sala 3",
        "organizador": "Adrian Tepes",
        "documentoOrganizador": 999,
        "titulo": "Los humanos no son comida",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "15:00",
        "horaFin": "17:30",
        "fecha": "2023-12-31",
        "tipoEvento": "CONFERENCIA"
    },
    {
        "id": 10,
        "sala": "Sala 4",
        "organizador": "Edward Buck",
        "documentoOrganizador": 101010,
        "titulo": "Como ganarle a un Brute",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "6:00",
        "horaFin": "9:00",
        "fecha": "2023-12-30",
        "tipoEvento": "CONFERENCIA"
    },
    {
        "id": 11,
        "sala": "Sala 4",
        "organizador": "Ricther Belmont",
        "documentoOrganizador": 111111,
        "titulo": "Rezar por otros",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "13:00",
        "horaFin": "15:00",
        "fecha": "2023-12-30",
        "tipoEvento": "CONFERENCIA"
    },
    {
        "id": 12,
        "sala": "Sala 4",
        "organizador": "Jericho Swain",
        "documentoOrganizador": 121212,
        "titulo": "Dirige a las masas, se un lider",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "17:00",
        "horaFin": "19:00",
        "fecha": "2023-12-30",
        "tipoEvento": "CONFERENCIA"
    },
    {
        "id": 13,
        "sala": "Sala 5",
        "organizador": "Steve Rogers",
        "documentoOrganizador": 131313,
        "titulo": "Curso: Lanzamientos de escudo",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "5:00",
        "horaFin": "8:00",
        "fecha": "2023-12-30",
        "tipoEvento": "CURSO"
    },
    {
        "id": 14,
        "sala": "Sala 5",
        "organizador": "Mario Mario",
        "documentoOrganizador": 141414,
        "titulo": "De destapar caños, a salvar un reino",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "9:00",
        "horaFin": "12:00",
        "fecha": "2023-12-30",
        "tipoEvento": "CONFERENCIA"
    },
    {
        "id": 15,
        "sala": "Sala 5",
        "organizador": "Clark Ken",
        "documentoOrganizador": 151515,
        "titulo": "El arte del periodismo",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "13:00",
        "horaFin": "15:00",
        "fecha": "2023-12-30",
        "tipoEvento": "CONFERENCIA"
    },
    {
        "id": 16,
        "sala": "Sala 6",
        "organizador": "Marco Aurelio",
        "documentoOrganizador": 161616,
        "titulo": "Hasta los emperadores se levantan de su cama",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "6:00",
        "horaFin": "8:00",
        "fecha": "2023-12-30",
        "tipoEvento": "CONFERENCIA"
    },
    {
        "id": 17,
        "sala": "Sala 6",
        "organizador": "Vlad Dracula Tepes",
        "documentoOrganizador": 171717,
        "titulo": "Sabiduria milenaria",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "9:00",
        "horaFin": "11:00",
        "fecha": "2023-12-30",
        "tipoEvento": "CONFERENCIA"
    },
    {
        "id": 18,
        "sala": "Sala 6",
        "organizador": "Maria",
        "documentoOrganizador": 181818,
        "titulo": "Maternidad: un arte",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non tellus orci. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet. Egestas congue quisque egestas diam in arcu.",
        "horaInicio": "12:00",
        "horaFin": "14:00",
        "fecha": "2023-12-30",
        "tipoEvento": "CONFERENCIA"
    },
]

var celebracionBackground = "#C2CF66";
var funeralBackground = "#FF887E";
var cursoBackground = "#ADD9E7";
var conferenciaBackground = "#FBD26C";

var eventosDelDia = [];

$(document).ready(function () {
    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true,
    }).datepicker('update', new Date(2023, 11, 30));

    let fechaSeleccionada = $("#fechaSeleccionada").val();

    rellenarLaTabla(fechaSeleccionada);

    llenarLosEventosDelDiaSeleccionado();

    controlAlertCelebracion();
    controlAlertfuneral();
    controlAlertConferencia();
    controlAlertCurso();

    $(document).on("change", ".Celebracion", function () {
        controlAlertCelebracion();
    });

    $(document).on("change", ".Funeral", function () {
        controlAlertfuneral();
    });

    $(document).on("change", ".Curso", function () {
        controlAlertCurso();
    })

    $(document).on("change", ".Conferencia", function () {
        controlAlertConferencia();
    });

    $(document).on("click", ".alert", function () {
        let id = $(this)[0].id;
        rellenarModal(id);
    })

    $(document).on("click", ".close", function () {
        $("#informacionDetallada").modal('hide');
    })

    $(document).on("click", "#submitButton", function () {
        var inputSearch = $("#search").val();
        if (inputSearch === "") {
            $("#errorMsg").text("Por favor, ingrese una palabra");
        } else {
            $("#errorMsg").text("")
            controlarBusqueda(inputSearch);
        }
    })

    $(window).on("load", function () {
        controlarBusqueda("");
    });

    $(document).on("click", "#recargar", function () {
        location.reload();
    })

    const alertElements = $('.alert');

    // Obtener referencia a la columna de las salas
    const columnSalas = $('.sticky');

    // Calcular la posición horizontal de la columna de las salas
    const columnSalasLeft = columnSalas.offset().left;

    checkAlertVisibility(alertElements, columnSalasLeft);
    $(window).scroll(checkAlertVisibility(alertElements, columnSalasLeft));
})

function rellenarLaTabla(fechaSeleccionada) {

    let año = fechaSeleccionada.substring(6);
    let mes = fechaSeleccionada.substring(3, 5);
    let dia = fechaSeleccionada.substring(0, 2);

    let fechaSeleccionadaFormateada = `${año}-${mes}-${dia}`;

    var salasUnicas = [];

    eventosDelDia = eventos.filter(function (evento) {
        return fechaSeleccionadaFormateada === evento.fecha;
    })

    for (let i = 0; i < eventosDelDia.length; i++) {
        let salaUnica = eventosDelDia[i].sala;
        if (!salasUnicas.includes(salaUnica)) {
            salasUnicas.push(salaUnica);
        }
    }

    $("#tabla tbody").empty();

    for (let i = 0; i < salasUnicas.length; i++) {

        row = `<tr class="filasSalas" id="${salasUnicas[i]}">
                <td class="align-middle text-center sticky">${salasUnicas[i]}</td>
        `

        for (let i = 0; i < 24; i++) {
            row += `
                <td id="${i + 1}:00"></td>
                <td id="${i + 1}:30"></td>
            `;
        }

        row += `</tr>`;
        $("#tabla tbody").append(row);

    }

    crearAlertsEventos(eventosDelDia);
}

function llenarLosEventosDelDiaSeleccionado() {
    $("#datepicker").change(function () {
        let fechaSeleccionada = $("#fechaSeleccionada").val();
        rellenarLaTabla(fechaSeleccionada);
    })
}

function crearAlertsEventos(eventos) {

    const eventosAgrupados = {};

    let tiposDeEventos = [];

    for (let i = 0; i < eventos.length; i++) {
        let tipoEvento = eventos[i].tipoEvento;
        if (!tiposDeEventos.includes(tipoEvento)) {
            tiposDeEventos.push(tipoEvento);
        }
    }

    $(".listaTipoDeEventos").empty();

    for (let i = 0; i < tiposDeEventos.length; i++) {

        let evento = tiposDeEventos[i].charAt(0).toUpperCase() + tiposDeEventos[i].slice(1).toLowerCase();

        switch (evento) {
            case "Celebracion":
                $(".listaTipoDeEventos").append(`
                    <input class="form-check-input ${evento}" type="checkbox" id="gridCheck" checked>
                    <label class="form-check-label ml-5" for="gridCheck">
                        ${evento}
                    </label>
                `);
                break;
            case "Funeral":
                $(".listaTipoDeEventos").append(`
                <input class="form-check-input ${evento}" type="checkbox" id="gridCheck" checked>
                <label class="form-check-label ml-5" for="gridCheck">
                    ${evento}
                </label>
            `);
                break;
            case "Curso":
                $(".listaTipoDeEventos").append(`
                    <input class="form-check-input ${evento}" type="checkbox" id="gridCheck" checked>
                    <label class="form-check-label ml-5" for="gridCheck">
                        ${evento}
                    </label>
                `);
                break;
            case "Conferencia":
                $(".listaTipoDeEventos").append(`
                <input class="form-check-input ${evento}" type="checkbox" id="gridCheck" checked>
                <label class="form-check-label ml-5" for="gridCheck">
                    ${evento}
                </label>
                `);
                break;
            default:
                break;
        }
    }

    eventos.forEach(evento => {
        const sala = evento.sala;
        const horaInicio = evento.horaInicio;

        if (!eventosAgrupados[sala]) {
            eventosAgrupados[sala] = {};
        }

        if (!eventosAgrupados[sala][horaInicio]) {
            eventosAgrupados[sala][horaInicio] = [];
        }

        eventosAgrupados[sala][horaInicio].push(evento);
    });

    $("#tabla tbody tr").find("td:not(:first-child)").empty();

    for (const sala in eventosAgrupados) {
        for (const horaInicio in eventosAgrupados[sala]) {


            const eventosSalaHora = eventosAgrupados[sala][horaInicio];

            eventosSalaHora.forEach(evento => {
                let alertBackground;

                switch (evento.tipoEvento) {
                    case "CELEBRACION":
                        alertBackground = celebracionBackground;
                        break;
                    case "FUNERAL":
                        alertBackground = funeralBackground;
                        break;
                    case "CURSO":
                        alertBackground = cursoBackground;
                        break;
                    case "CONFERENCIA":
                        alertBackground = conferenciaBackground;
                        break;
                }

                const divElement = `
                <div class="alert ${evento.tipoEvento.toLowerCase()}" role="alert" style="background-color: ${alertBackground}" id="${evento.id}">
                    <h4 class="alert-heading mb-2">${evento.titulo}</h4>
                    <p>Organizador del evento: ${evento.organizador}</p>
                    <p>Documento del organizador: ${evento.documentoOrganizador}</p>
                    <hr>
                    <p class="mb-0">Horario: ${evento.horaInicio} - ${evento.horaFin}</p>
                </div>
                `;

                $("#tabla tbody tr").each(function () {
                    var contenido = $(this).find("td:first-child").html();

                    if (contenido === sala) {

                        var columnaIndice = -1; // Inicialización para identificar la columna deseada
                        var idsDeTd = $(this).find("td:not(:first-child)").map(function (index) {
                            if ($(this).attr("id") === horaInicio) {
                                columnaIndice = index + 1; // Sumar 1 para contar la columna
                            }
                            return $(this).attr("id");
                        }).get();

                        if (columnaIndice !== -1) {
                            console.log(`En la sala ${contenido}: ${evento.titulo} y comienza a las ${horaInicio}`);

                            var $divElement = $(divElement); // Convertir a objeto jQuery

                            var $celda = $(this).find(`td:nth-child(${columnaIndice + 1})`);
                            var posicion = $celda.position();
                            var leftPosition = posicion.left + $celda.width(); // Ajustar la posición según tus necesidades

                            $divElement.css({ left: leftPosition, top: posicion.top });

                            $('body').append(divElement);
                        }
                    }
                });
            })
        }
    }
}

function rellenarModal(idEvento) {
    let id = Number(idEvento);
    const informacionDelEvento = eventosDelDia.find((item) => item.id === id);

    $(".modal-header").empty();

    $(".modal-body").empty();

    $(".modal-footer").empty();

    $(".modal-header").append(`
            <h5 class="modal-title" id="tituloModal">${informacionDelEvento.titulo}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        `);

    $(".modal-body").append(`
        <p><b>Organizador:</b> ${informacionDelEvento.organizador}</p>
        <p><b>Documento del organizador:</b> ${informacionDelEvento.documentoOrganizador}</p>
        <p><b>Descripción del evento:</b></p>
        <p style="text-align: justify;">${informacionDelEvento.descripcion}</p>
    `);

    $(".modal-footer").append(`
        <p><b>horario:</b> ${informacionDelEvento.horaInicio} - ${informacionDelEvento.horaFin}</p>
    `);

    $("#informacionDetallada").modal('show');
}

function controlarBusqueda(parametroBuscado) {

    const searchTerm = parametroBuscado.toLowerCase();


    console.log("Buscaste esto: ", searchTerm);

    $(".alert").each(function () {
        const alert = $(this);
        const textH4 = alert.find("h4").text().toLowerCase();
        const textP = alert.find("p").text().toLowerCase();

        if (!textH4.includes(searchTerm) && !textP.includes(searchTerm)) {
            alert.hide();
        }
    });

}

function controlAlertCelebracion() {
    let alertCelebracion = $(".celebracion");
    let checkboxCelebracion = $(".Celebracion");

    if (checkboxCelebracion.prop("checked")) {
        alertCelebracion.show();
    } else {
        alertCelebracion.hide();
    }
}

function controlAlertfuneral() {
    let alertFuneral = $(".funeral");
    let checkboxFuneral = $(".Funeral");

    if (checkboxFuneral.prop("checked")) {
        alertFuneral.show();
    } else {
        alertFuneral.hide();
    }
}

function controlAlertCurso() {
    let alertCurso = $(".curso");
    let checkboxCurso = $(".Curso")

    if (checkboxCurso.prop("checked")) {
        alertCurso.show();
    } else {
        alertCurso.hide();
    }
}

function controlAlertConferencia() {
    let alertConferencia = $(".conferencia");
    let checkboxConferencia = $(".Conferencia");

    if (checkboxConferencia.prop("checked")) {
        alertConferencia.show();
    } else {
        alertConferencia.hide();
    }
}

function checkAlertVisibility(alertElements, columnSalasLeft) {
    const windowScrollLeft = $(window).scrollLeft();
    const windowWidth = $(window).width();

    alertElements.each(function () {
        const alertLeft = $(this).offset().left - windowScrollLeft;

        if (alertLeft < columnSalasLeft + windowWidth && alertLeft > columnSalasLeft) {
            $(this).hide(); // Ocultar el elemento .alert
        } else {
            $(this).show(); // Mostrar el elemento .alert
        }
    });
}