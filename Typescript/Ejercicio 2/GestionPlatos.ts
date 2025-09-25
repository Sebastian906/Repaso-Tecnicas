import { Plato } from "./Plato"

export class GestionPlatos {
    private menu: Map<string, Plato> = new Map();

    agregarPlato(nombre: string, precio: number): void {
        if (this.menu.has(nombre)) {
            console.log("El plato ya está en el menú");
        } else {
            this.menu.set(nombre, new Plato(nombre, precio));
            console.log("Plato agregado exitosamente.");
        }
    }

    mostrarMenu(): void {
        console.log("\n--- Menú de Platos ---");
        if (this.menu.size === 0) {
            console.log("No hay platos registrados.");
        } else {
            this.menu.forEach(plato => console.log(plato.toString()));
        }
    }

    existePlato(nombre: string): boolean {
        return this.menu.has(nombre);
    }

    obtenerPrecio(nombre: string): number | undefined {
        return this.menu.get(nombre)?.precio;
    }
}