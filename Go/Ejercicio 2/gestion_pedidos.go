package main

import "fmt"

type GestionPedidos struct {
	Pedidos []Pedido
}

func NewGestionPedidos() *GestionPedidos {
	return &GestionPedidos{Pedidos: []Pedido{}}
}

func (gp *GestionPedidos) AgregarPedido(cliente, plato string) {
	gp.Pedidos = append(gp.Pedidos, Pedido{Cliente: cliente, Plato: plato})
	fmt.Println("Pedido agregado exitosamente.")
}

func (gp *GestionPedidos) MostrarPedidos() {
	fmt.Println("\n--- Pedidos Pendientes ---")
	if len(gp.Pedidos) == 0 {
		fmt.Println("No hay pedidos pendientes.")
	} else {
		for i, pedido := range gp.Pedidos {
			fmt.Printf("%d. %s\n", i+1, pedido)
		}
	}
}

func (gp *GestionPedidos) AtenderPedido() *Pedido {
	if len(gp.Pedidos) == 0 {
		return nil
	}
	pedido := gp.Pedidos[0]
	gp.Pedidos = gp.Pedidos[1:]
	return &pedido
}
