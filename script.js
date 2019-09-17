var pendientes = [
    { descripcion: "Tarea de Agenda de JS", completado: false },
    { descripcion: "Articulo sobre historia de computadoras", completado: false },
    { descripcion: "Lavar el coche", completado: true }
];

function imprimirPendientes(pendiente, index) {
    var lista = document.getElementById("lista");
    lista.insertAdjacentHTML('beforeend',
        `<li ` + estaCompletado(pendiente.completado) + ` onClick="marcarCompletado(` + index + `)" >
        <div class="checkbox">
            <i class="fa fa-check"></i>
        </div>
        <div class="descripcion">`+ pendiente.descripcion + `</div>
    </li>`);

}

function estaCompletado(completado) {
    if (completado) {
        return 'class="done pendiente"';
    } else {
        return 'class="pendiente"';
    }
}

function marcarCompletado(index) {
    //var pendientesUI = document.getElementsByClassName("pendiente");
    //pendientesUI[index].classList.toggle("done");
    pendientes[index].completado = !pendientes[index].completado;
    imprimirTodosLosPendientes();
}

function imprimirTodosLosPendientes() {
    document.getElementById("lista").innerHTML = "";
    pendientes.forEach(imprimirPendientes);
}

function agregarTarea() {
    var tarea = document.getElementById("item").value;
		var nuevoDato = {descripcion: tarea, completado: false};
    pendientes.push(nuevoDato);
    imprimirTodosLosPendientes();
}


pendientes.forEach(imprimirPendientes);
