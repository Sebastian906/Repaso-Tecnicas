package main

import (
	"fmt"
	"os"
)

type Jugador struct {
	Nombre string
	Puntos int
	Activo bool
}

type FlujoJuego struct {
	jugadores []Jugador
	pila      *GestionPilaCartas
	interfaz  *InterfazConsola
}

func NuevoFlujoJuego() *FlujoJuego {
	return &FlujoJuego{
		pila:     NuevaGestionPilaCartas(),
		interfaz: &InterfazConsola{},
	}
}

func (f *FlujoJuego) IniciarJuego() {
	n := f.interfaz.PedirNumeroJugadores()
	for i := 0; i < n; i++ {
		nombre := f.interfaz.PedirNombreJugador(i)
		f.jugadores = append(f.jugadores, Jugador{Nombre: nombre, Puntos: 0, Activo: true})
	}
	f.Ronda(f.jugadores)
}

func (f *FlujoJuego) Ronda(participantes []Jugador) {
	f.interfaz.MostrarMensaje("--- Nueva Ronda ---")

	for i := range participantes {
		participantes[i].Puntos = 0
		participantes[i].Activo = true

		for participantes[i].Activo {
			carta, ok := f.pila.SacarCarta()
			if !ok {
				break
			}
			valor := f.valorCarta(carta, participantes[i].Puntos)
			participantes[i].Puntos += valor
			f.interfaz.MostrarMensaje(fmt.Sprintf("%s obtuvo %s (total: %d)", participantes[i].Nombre, carta, participantes[i].Puntos))

			if participantes[i].Puntos > 21 {
				f.interfaz.MostrarMensaje(fmt.Sprintf("%s se pasó de 21 y queda eliminado", participantes[i].Nombre))
				participantes[i].Activo = false
				break
			}

			if !f.interfaz.PreguntarCarta(participantes[i].Nombre) {
				participantes[i].Activo = false
			}
		}
	}

	var vivos []Jugador
	for _, j := range participantes {
		if j.Puntos <= 21 {
			vivos = append(vivos, j)
		}
	}

	if len(vivos) == 0 {
		f.interfaz.MostrarMensaje("Todos perdieron")
		return
	}

	maxPuntos := vivos[0].Puntos
	for _, j := range vivos {
		if j.Puntos > maxPuntos {
			maxPuntos = j.Puntos
		}
	}

	var empatados []Jugador
	for _, j := range vivos {
		if j.Puntos == maxPuntos {
			empatados = append(empatados, j)
		}
	}

	if len(empatados) == 1 {
		ganador := empatados[0]
		f.interfaz.MostrarMensaje(fmt.Sprintf("¡%s gana con %d puntos!", ganador.Nombre, ganador.Puntos))

		file, _ := os.OpenFile("ganadores.txt", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
		defer file.Close()
		fmt.Fprintf(file, "Ganador: %s (%d)\n", ganador.Nombre, ganador.Puntos)
	} else {
		nombres := ""
		for _, j := range empatados {
			nombres += j.Nombre + " "
		}
		f.interfaz.MostrarMensaje("Empate entre: " + nombres)
		f.Ronda(empatados)
	}
}

func (f *FlujoJuego) valorCarta(carta string, puntosActuales int) int {
	switch carta {
	case "J", "Q", "K":
		return 10
	case "A":
		if puntosActuales+11 <= 21 {
			return 11
		}
		return 1
	default:
		var v int
		fmt.Sscan(carta, &v)
		return v
	}
}

func main() {
	juego := NuevoFlujoJuego()
	juego.IniciarJuego()
}
