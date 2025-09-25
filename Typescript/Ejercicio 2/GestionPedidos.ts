import { Pedido } from "./Pedido";

export class GestionPedidos {
    private pedidos: Pedido[] = [];

    agregarPedido(cliente: string, plato: string): void {
        this.pedidos.push(new Pedido(cliente, plato));
        console.log("Pedido agregado exitosamente.");
    }

    mostrarPedidos(): void {
        console.log("\n--- Pedidos Pendientes ---");
        if (this.pedidos.length === 0) {
            console.log("No hay pedidos pendientes.");
        } else {
            this.pedidos.forEach((pedido, i) => {
                console.log(`${i + 1}. ${pedido.toString()}`);
            });
        }
    }

    atenderPedido(): Pedido | undefined {
        return this.pedidos.shift();
    }
}
