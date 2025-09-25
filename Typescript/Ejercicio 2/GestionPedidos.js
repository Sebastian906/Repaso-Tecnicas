"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionPedidos = void 0;
var Pedido_1 = require("./Pedido");
var GestionPedidos = /** @class */ (function () {
    function GestionPedidos() {
        this.pedidos = [];
    }
    GestionPedidos.prototype.agregarPedido = function (cliente, plato) {
        this.pedidos.push(new Pedido_1.Pedido(cliente, plato));
        console.log("Pedido agregado exitosamente.");
    };
    GestionPedidos.prototype.mostrarPedidos = function () {
        console.log("\n--- Pedidos Pendientes ---");
        if (this.pedidos.length === 0) {
            console.log("No hay pedidos pendientes.");
        }
        else {
            this.pedidos.forEach(function (pedido, i) {
                console.log("".concat(i + 1, ". ").concat(pedido.toString()));
            });
        }
    };
    GestionPedidos.prototype.atenderPedido = function () {
        return this.pedidos.shift();
    };
    return GestionPedidos;
}());
exports.GestionPedidos = GestionPedidos;
