"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionPilaCartas = void 0;
var GestionPilaCartas = /** @class */ (function () {
    function GestionPilaCartas() {
        this.pila = this.crearBaraja();
    }
    GestionPilaCartas.prototype.crearBaraja = function () {
        var cartas = [
            "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
        ];
        var baraja = [];
        for (var i = 0; i < 4; i++) {
            baraja.push.apply(baraja, cartas);
        }
        return this.shuffle(baraja);
    };
    GestionPilaCartas.prototype.shuffle = function (array) {
        return array.sort(function () { return Math.random() - 0.5; });
    };
    GestionPilaCartas.prototype.sacarCarta = function () {
        return this.pila.pop();
    };
    GestionPilaCartas.prototype.cartasRestantes = function () {
        return this.pila.length;
    };
    return GestionPilaCartas;
}());
exports.GestionPilaCartas = GestionPilaCartas;
