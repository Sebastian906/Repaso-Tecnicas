package main

import "fmt"

type Pedido struct {
	Cliente string
	Plato   string
}

func (p Pedido) String() string {
	return fmt.Sprintf("%s - %s", p.Cliente, p.Plato)
}
