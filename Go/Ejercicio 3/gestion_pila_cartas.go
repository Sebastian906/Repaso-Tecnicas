package main

import (
	"math/rand"
	"time"
)

type GestionPilaCartas struct {
	pila []string
}

func NuevaGestionPilaCartas() *GestionPilaCartas {
	cartas := []string{"A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"}
	baraja := []string{}
	for i := 0; i < 4; i++ {
		baraja = append(baraja, cartas...)
	}
	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(baraja), func(i, j int) { baraja[i], baraja[j] = baraja[j], baraja[i] })
	return &GestionPilaCartas{pila: baraja}
}

func (g *GestionPilaCartas) SacarCarta() (string, bool) {
	if len(g.pila) == 0 {
		return "", false
	}
	carta := g.pila[len(g.pila)-1]
	g.pila = g.pila[:len(g.pila)-1]
	return carta, true
}

func (g *GestionPilaCartas) CartasRestantes() int {
	return len(g.pila)
}
