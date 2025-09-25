import { Pedido } from "./Pedido";
import { GestionPlatos } from "./GestionPlatos";

export class AtencionPedidos {
    private ganancias: number = 0;

    atender(pedido: Pedido | undefined, gestionPlatos: GestionPlatos): void {
        if (pedido) {
            const precio = gestionPlatos.obtenerPrecio(pedido.plato);
            if (precio !== undefined) {
                this.ganancias += precio;
                console.log(`Atendiendo pedido de ${pedido.cliente} - ${pedido.plato}`);
            }
        } else {
            console.log("No hay pedidos para atender.");
        }
    }

    mostrarGanancias(): void {
        console.log(`Ganancias totales: $${this.ganancias.toFixed(2)}`);
    }
}
