window.onload = function() {
    let alumnos = new Array(5);

    alumnos[0] = { id: 1, nombre: "Carlos Manchego", calificacion: 8};
    alumnos[1] = { id: 2, nombre: "Juan Manchego", calificacion: 10};
    alumnos[2] = { id: 3, nombre: "Camila Manchego", calificacion: 9};
    alumnos[3] = { id: 4, nombre: "Geoffrey Soto", calificacion: 8};
    alumnos[4] = { id: 5, nombre: "Loki Ermakson", calificacion: 3};
    alumnos[5] = { id: 6, nombre: "Teniente Anubis", calificacion: 7};

    let tabla = document.getElementById("alumnos");
    let registros = document.createElement("tbody");

    alumnos.forEach( alumno => {
        
        let renglon = document.createElement("tr");
        let tableData = document.createElement("td");

        tableData.innerText = alumno.id;
        renglon.appendChild(tableData);

        tableData = document.createElement("td");
        tableData.innerText = alumno.nombre;
        renglon.appendChild(tableData);

        tableData = document.createElement("td");
        tableData.innerText = alumno.calificacion;
        renglon.appendChild(tableData);

        registros.appendChild(renglon);
    });

    tabla.appendChild(registros);
}