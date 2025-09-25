import { GestionPilaCartas } from "./gestion_pila_cartas";
import { InterfazConsola } from "./interfaz_consola";
import * as fs from "fs";

interface Jugador {
    nombre: string;
    puntos: number;
    activo: boolean;
}

class FlujoJuego {
    private jugadores: Jugador[] = [];
    private pila: GestionPilaCartas;
    private interfaz: InterfazConsola;

    constructor() {
        this.pila = new GestionPilaCartas();
        this.interfaz = new InterfazConsola();
    }

    iniciarJuego() {
        const n = this.interfaz.pedirNumeroJugadores();
        for (let i = 0; i < n; i++) {
            const nombre = this.interfaz.pedirNombreJugador(i);
            this.jugadores.push({ nombre, puntos: 0, activo: true });
        }
        this.ronda(this.jugadores);
    }

    private ronda(participantes: Jugador[]) {
        this.interfaz.mostrarMensaje("--- Nueva Ronda ---");
        participantes.forEach(jugador => {
            jugador.puntos = 0;
            jugador.activo = true;

            while (jugador.activo) {
                const carta = this.pila.sacarCarta();
                if (!carta) break;
                let valor = this.valorCarta(carta, jugador.puntos);
                jugador.puntos += valor;

                this.interfaz.mostrarMensaje(
                    `${jugador.nombre} obtuvo ${carta} (total: ${jugador.puntos})`
                );

                if (jugador.puntos > 21) {
                    this.interfaz.mostrarMensaje(`${jugador.nombre} se pasó de 21 y queda eliminado`);
                    jugador.activo = false;
                    break;
                }

                if (!this.interfaz.preguntarCarta(jugador.nombre)) {
                    jugador.activo = false;
                }
            }
        });

        // Evaluar ganador o empate
        const vivos = participantes.filter(j => j.puntos <= 21);
        if (vivos.length === 0) {
            this.interfaz.mostrarMensaje("Nadie gana en esta ronda.");
            return;
        }

        const maxPuntos = Math.max(...vivos.map(j => j.puntos));
        const empatados = vivos.filter(j => j.puntos === maxPuntos);

        if (empatados.length === 1) {
            const ganador = empatados[0];
            this.interfaz.mostrarMensaje(`¡${ganador.nombre} gana con ${ganador.puntos} puntos!`);
            fs.writeFileSync("ganadores.txt", `Ganador: ${ganador.nombre} (${ganador.puntos})\n`, { flag: "a" });
        } else {
            this.interfaz.mostrarMensaje(`Empate entre: ${empatados.map(j => j.nombre).join(", ")}`);
            this.ronda(empatados); 
        }
    }

    private valorCarta(carta: string, puntosActuales: number): number {
        if (["J", "Q", "K"].includes(carta)) return 10;
        if (carta === "A") return puntosActuales + 11 <= 21 ? 11 : 1;
        return parseInt(carta);
    }
}

// Ejecutar el juego automáticamente si se llama desde Node
if (require.main === module) {
    const juego = new FlujoJuego();
    juego.iniciarJuego();
}
