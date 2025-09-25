package main

import "fmt"

type Plato struct {
	Nombre string
	Precio float64
}

func (p Plato) String() string {
	return fmt.Sprintf("%s - $%.2f", p.Nombre, p.Precio)
}
