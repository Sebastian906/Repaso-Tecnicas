package main

import "fmt"

type AtencionPedidos struct {
	Ganancias float64
}

func (ap *AtencionPedidos) Atender(pedido *Pedido, gestionPlatos *GestionPlatos) {
	if pedido != nil {
		precio := gestionPlatos.ObtenerPrecio(pedido.Plato)
		ap.Ganancias += precio
		fmt.Printf("Atendiendo pedido de %s - %s\n", pedido.Cliente, pedido.Plato)
	} else {
		fmt.Println("No hay pedidos para atender.")
	}
}

func (ap *AtencionPedidos) MostrarGanancias() {
	fmt.Printf("Ganancias totales: $%.2f\n", ap.Ganancias)
}
