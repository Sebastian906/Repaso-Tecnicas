package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

type InterfazConsola struct{}

func (i *InterfazConsola) MostrarMensaje(msg string) {
	fmt.Println(msg)
}

func (i *InterfazConsola) PedirNumeroJugadores() int {
	var n int
	fmt.Print("Ingrese el número de jugadores: ")
	fmt.Scanln(&n)
	return n
}

func (i *InterfazConsola) PedirNombreJugador(idx int) string {
	reader := bufio.NewReader(os.Stdin)
	fmt.Printf("Jugador %d, ingrese su nombre: ", idx+1)
	nombre, _ := reader.ReadString('\n')
	return strings.TrimSpace(nombre)
}

func (i *InterfazConsola) PreguntarCarta(nombre string) bool {
	reader := bufio.NewReader(os.Stdin)
	fmt.Printf("%s, ¿quieres otra carta? (s/n): ", nombre)
	resp, _ := reader.ReadString('\n')
	return strings.ToLower(strings.TrimSpace(resp)) == "s"
}
