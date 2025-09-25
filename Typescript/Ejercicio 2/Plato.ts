export class Plato {
    constructor(public nombre: string, public precio: number) {}

    toString(): string {
        return `${this.nombre} - $${this.precio.toFixed(2)}`;
    }
}