"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(cliente, plato) {
        this.cliente = cliente;
        this.plato = plato;
    }
    Pedido.prototype.toString = function () {
        return "".concat(this.cliente, " - ").concat(this.plato);
    };
    return Pedido;
}());
exports.Pedido = Pedido;
