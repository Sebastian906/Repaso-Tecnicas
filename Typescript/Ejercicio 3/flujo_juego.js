"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gestion_pila_cartas_1 = require("./gestion_pila_cartas");
var interfaz_consola_1 = require("./interfaz_consola");
var fs = require("fs");
var FlujoJuego = /** @class */ (function () {
    function FlujoJuego() {
        this.jugadores = [];
        this.pila = new gestion_pila_cartas_1.GestionPilaCartas();
        this.interfaz = new interfaz_consola_1.InterfazConsola();
    }
    FlujoJuego.prototype.iniciarJuego = function () {
        var n = this.interfaz.pedirNumeroJugadores();
        for (var i = 0; i < n; i++) {
            var nombre = this.interfaz.pedirNombreJugador(i);
            this.jugadores.push({ nombre: nombre, puntos: 0, activo: true });
        }
        this.ronda(this.jugadores);
    };
    FlujoJuego.prototype.ronda = function (participantes) {
        var _this = this;
        this.interfaz.mostrarMensaje("--- Nueva Ronda ---");
        participantes.forEach(function (jugador) {
            jugador.puntos = 0;
            jugador.activo = true;
            while (jugador.activo) {
                var carta = _this.pila.sacarCarta();
                if (!carta)
                    break;
                var valor = _this.valorCarta(carta, jugador.puntos);
                jugador.puntos += valor;
                _this.interfaz.mostrarMensaje("".concat(jugador.nombre, " obtuvo ").concat(carta, " (total: ").concat(jugador.puntos, ")"));
                if (jugador.puntos > 21) {
                    _this.interfaz.mostrarMensaje("".concat(jugador.nombre, " se pas\u00F3 de 21 y queda eliminado"));
                    jugador.activo = false;
                    break;
                }
                if (!_this.interfaz.preguntarCarta(jugador.nombre)) {
                    jugador.activo = false;
                }
            }
        });
        // Evaluar ganador o empate
        var vivos = participantes.filter(function (j) { return j.puntos <= 21; });
        if (vivos.length === 0) {
            this.interfaz.mostrarMensaje("Nadie gana en esta ronda.");
            return;
        }
        var maxPuntos = Math.max.apply(Math, vivos.map(function (j) { return j.puntos; }));
        var empatados = vivos.filter(function (j) { return j.puntos === maxPuntos; });
        if (empatados.length === 1) {
            var ganador = empatados[0];
            this.interfaz.mostrarMensaje("\u00A1".concat(ganador.nombre, " gana con ").concat(ganador.puntos, " puntos!"));
            fs.writeFileSync("ganadores.txt", "Ganador: ".concat(ganador.nombre, " (").concat(ganador.puntos, ")\n"), { flag: "a" });
        }
        else {
            this.interfaz.mostrarMensaje("Empate entre: ".concat(empatados.map(function (j) { return j.nombre; }).join(", ")));
            this.ronda(empatados);
        }
    };
    FlujoJuego.prototype.valorCarta = function (carta, puntosActuales) {
        if (["J", "Q", "K"].includes(carta))
            return 10;
        if (carta === "A")
            return puntosActuales + 11 <= 21 ? 11 : 1;
        return parseInt(carta);
    };
    return FlujoJuego;
}());
// Ejecutar el juego automáticamente si se llama desde Node
if (require.main === module) {
    var juego = new FlujoJuego();
    juego.iniciarJuego();
}
