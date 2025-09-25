import * as readline from "readline-sync";
import { GestionPlatos } from "./GestionPlatos";
import { GestionPedidos } from "./GestionPedidos";
import { AtencionPedidos } from "./AtencionPedidos";

const gestionPlatos = new GestionPlatos();
const gestionPedidos = new GestionPedidos();
const atencion = new AtencionPedidos();

while (true) {
    console.log("\n--- Menú Principal ---");
    console.log("1. Agregar nuevo pedido");
    console.log("2. Mostrar pedidos pendientes");
    console.log("3. Atender pedido");
    console.log("4. Mostrar ganancias");
    console.log("5. Salir");

    const opcion = readline.question("Seleccione una opcion: ");

    switch (opcion) {
        case "1":
            const cliente = readline.question("Ingrese el nombre del cliente: ");
            const nombrePlato = readline.question("Ingrese el nombre del plato: ");
            const precioPlato = parseFloat(readline.question("Ingrese el precio del plato: "));
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
            const pedido = gestionPedidos.atenderPedido();
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
