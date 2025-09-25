"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plato = void 0;
var Plato = /** @class */ (function () {
    function Plato(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    Plato.prototype.toString = function () {
        return "".concat(this.nombre, " - $").concat(this.precio.toFixed(2));
    };
    return Plato;
}());
exports.Plato = Plato;
