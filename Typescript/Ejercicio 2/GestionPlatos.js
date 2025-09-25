"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionPlatos = void 0;
var Plato_1 = require("./Plato");
var GestionPlatos = /** @class */ (function () {
    function GestionPlatos() {
        this.menu = new Map();
    }
    GestionPlatos.prototype.agregarPlato = function (nombre, precio) {
        if (this.menu.has(nombre)) {
            console.log("El plato ya está en el menú");
        }
        else {
            this.menu.set(nombre, new Plato_1.Plato(nombre, precio));
            console.log("Plato agregado exitosamente.");
        }
    };
    GestionPlatos.prototype.mostrarMenu = function () {
        console.log("\n--- Menú de Platos ---");
        if (this.menu.size === 0) {
            console.log("No hay platos registrados.");
        }
        else {
            this.menu.forEach(function (plato) { return console.log(plato.toString()); });
        }
    };
    GestionPlatos.prototype.existePlato = function (nombre) {
        return this.menu.has(nombre);
    };
    GestionPlatos.prototype.obtenerPrecio = function (nombre) {
        var _a;
        return (_a = this.menu.get(nombre)) === null || _a === void 0 ? void 0 : _a.precio;
    };
    return GestionPlatos;
}());
exports.GestionPlatos = GestionPlatos;
