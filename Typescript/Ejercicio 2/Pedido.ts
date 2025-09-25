export class Pedido {
    constructor(public cliente: string, public plato: string) {}

    toString(): string {
        return `${this.cliente} - ${this.plato}`;
    }
}
