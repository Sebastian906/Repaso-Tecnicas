import * as readlineSync from "readline-sync";

export class InterfazConsola {
    mostrarMensaje(msg: string): void {
        console.log(msg);
    }

    pedirNumeroJugadores(): number {
        return readlineSync.questionInt("Ingrese el número de jugadores: ");
    }

    pedirNombreJugador(i: number): string {
        return readlineSync.question(`Jugador ${i + 1}, ingrese su nombre: `);
    }

    preguntarCarta(nombre: string): boolean {
        const respuesta = readlineSync.question(`${nombre}, ¿quieres otra carta? (s/n): `);
        return respuesta.toLowerCase() === "s";
    }
}
