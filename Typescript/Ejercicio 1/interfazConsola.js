"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
var gestionVocabulario_1 = require("./gestionVocabulario");
var modoEvaluacion_1 = require("./modoEvaluacion");
function menu() {
    while (true) {
        console.log("\n--- Menú Principal ---");
        console.log("1. Agregar palabra");
        console.log("2. Buscar palabra");
        console.log("3. Editar palabra");
        console.log("4. Eliminar palabra");
        console.log("5. Iniciar evaluación");
        console.log("6. Salir");
        var op = (0, readline_sync_1.question)("Seleccione una opcion: ");
        switch (op) {
            case "1":
                var p = (0, readline_sync_1.question)("Palabra en ingles: ");
                var s = (0, readline_sync_1.question)("Significado: ");
                (0, gestionVocabulario_1.agregarPalabra)(p, s);
                break;
            case "2":
                (0, gestionVocabulario_1.buscarPalabra)((0, readline_sync_1.question)("Buscar: "));
                break;
            case "3":
                var pe = (0, readline_sync_1.question)("Editar palabra: ");
                var np = (0, readline_sync_1.question)("Nueva palabra: ");
                var ns = (0, readline_sync_1.question)("Nuevo significado: ");
                (0, gestionVocabulario_1.editarPalabra)(pe, np, ns);
                break;
            case "4":
                (0, gestionVocabulario_1.eliminarPalabra)((0, readline_sync_1.question)("Eliminar: "));
                break;
            case "5":
                (0, modoEvaluacion_1.iniciarEvaluacion)();
                break;
            case "6":
                console.log("Adios!");
                return;
            default:
                console.log("Opcion invalida.");
        }
    }
}
menu();
