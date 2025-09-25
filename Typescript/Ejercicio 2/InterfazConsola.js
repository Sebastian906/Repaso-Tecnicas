"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var GestionPlatos_1 = require("./GestionPlatos");
var GestionPedidos_1 = require("./GestionPedidos");
var AtencionPedidos_1 = require("./AtencionPedidos");
var gestionPlatos = new GestionPlatos_1.GestionPlatos();
var gestionPedidos = new GestionPedidos_1.GestionPedidos();
var atencion = new AtencionPedidos_1.AtencionPedidos();
while (true) {
    console.log("\n--- Menú Principal ---");
    console.log("1. Agregar nuevo pedido");
    console.log("2. Mostrar pedidos pendientes");
    console.log("3. Atender pedido");
    console.log("4. Mostrar ganancias");
    console.log("5. Salir");
    var opcion = readline.question("Seleccione una opción: ");
    switch (opcion) {
        case "1":
            var cliente = readline.question("Ingrese el nombre del cliente: ");
            var nombrePlato = readline.question("Ingrese el nombre del plato: ");
            var precioPlato = parseFloat(readline.question("Ingrese el precio del plato: "));
            if (!gestionPlatos.existePlato(nombrePlato)) {
                gestionPlatos.agregarPlato(nombrePlato, precioPlato);
            }
            gestionPedidos.agregarPedido(cliente, nombrePlato);
            console.log("Pedido registrado correctamente.");
            break;
        case "2":
            gestionPedidos.mostrarPedidos();
            break;
        case "3":
            var pedido = gestionPedidos.atenderPedido();
            atencion.atender(pedido, gestionPlatos);
            break;
        case "4":
            atencion.mostrarGanancias();
            break;
        case "5":
            console.log("Saliendo del sistema...");
            process.exit(0);
        default:
            console.log("Opción inválida. Por favor ingrese otra opción.");
    }
}
