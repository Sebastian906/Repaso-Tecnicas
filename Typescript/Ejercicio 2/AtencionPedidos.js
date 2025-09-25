"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtencionPedidos = void 0;
var AtencionPedidos = /** @class */ (function () {
    function AtencionPedidos() {
        this.ganancias = 0;
    }
    AtencionPedidos.prototype.atender = function (pedido, gestionPlatos) {
        if (pedido) {
            var precio = gestionPlatos.obtenerPrecio(pedido.plato);
            if (precio !== undefined) {
                this.ganancias += precio;
                console.log("Atendiendo pedido de ".concat(pedido.cliente, " - ").concat(pedido.plato));
            }
        }
        else {
            console.log("No hay pedidos para atender.");
        }
    };
    AtencionPedidos.prototype.mostrarGanancias = function () {
        console.log("Ganancias totales: $".concat(this.ganancias.toFixed(2)));
    };
    return AtencionPedidos;
}());
exports.AtencionPedidos = AtencionPedidos;
