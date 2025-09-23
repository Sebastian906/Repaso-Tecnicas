import { question } from "readline-sync";
import { agregarPalabra, buscarPalabra, editarPalabra, eliminarPalabra } from "./gestionVocabulario";
import { iniciarEvaluacion } from "./modoEvaluacion";

function menu() {
    while (true) {
        console.log("\n--- Menú Principal ---");
        console.log("1. Agregar palabra");
        console.log("2. Buscar palabra");
        console.log("3. Editar palabra");
        console.log("4. Eliminar palabra");
        console.log("5. Iniciar evaluación");
        console.log("6. Salir");

        const op = question("Seleccione una opción: ");

        switch (op) {
            case "1":
                const p = question("Palabra en inglés: ");
                const s = question("Significado: ");
                agregarPalabra(p, s);
                break;
            case "2":
                buscarPalabra(question("Buscar: "));
                break;
            case "3":
                const pe = question("Editar palabra: ");
                const np = question("Nueva palabra: ");
                const ns = question("Nuevo significado: ");
                editarPalabra(pe, np, ns);
                break;
            case "4":
                eliminarPalabra(question("Eliminar: "));
                break;
            case "5":
                iniciarEvaluacion();
                break;
            case "6":
                console.log("Adiós!");
                return;
            default:
                console.log("Opción inválida.");
        }
    }
}

menu();