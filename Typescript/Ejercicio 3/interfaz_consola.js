"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfazConsola = void 0;
var readlineSync = require("readline-sync");
var InterfazConsola = /** @class */ (function () {
    function InterfazConsola() {
    }
    InterfazConsola.prototype.mostrarMensaje = function (msg) {
        console.log(msg);
    };
    InterfazConsola.prototype.pedirNumeroJugadores = function () {
        return readlineSync.questionInt("Ingrese el número de jugadores: ");
    };
    InterfazConsola.prototype.pedirNombreJugador = function (i) {
        return readlineSync.question("Jugador ".concat(i + 1, ", ingrese su nombre: "));
    };
    InterfazConsola.prototype.preguntarCarta = function (nombre) {
        var respuesta = readlineSync.question("".concat(nombre, ", \u00BFquieres otra carta? (s/n): "));
        return respuesta.toLowerCase() === "s";
    };
    return InterfazConsola;
}());
exports.InterfazConsola = InterfazConsola;
