package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	gestionPlatos := NewGestionPlatos()
	gestionPedidos := NewGestionPedidos()
	atencion := &AtencionPedidos{}

	reader := bufio.NewReader(os.Stdin)

	for {
		fmt.Println("\n--- Menú Principal ---")
		fmt.Println("1. Agregar nuevo pedido")
		fmt.Println("2. Mostrar pedidos pendientes")
		fmt.Println("3. Atender pedido")
		fmt.Println("4. Mostrar ganancias")
		fmt.Println("5. Salir")

		fmt.Print("Seleccione una opción: ")
		opcion, _ := reader.ReadString('\n')
		opcion = strings.TrimSpace(opcion)

		switch opcion {
		case "1":
			fmt.Print("Ingrese el nombre del cliente: ")
			cliente, _ := reader.ReadString('\n')
			cliente = strings.TrimSpace(cliente)

			fmt.Print("Ingrese el nombre del plato: ")
			nombrePlato, _ := reader.ReadString('\n')
			nombrePlato = strings.TrimSpace(nombrePlato)

			fmt.Print("Ingrese el precio del plato: ")
			precioStr, _ := reader.ReadString('\n')
			precioStr = strings.TrimSpace(precioStr)
			precioPlato, _ := strconv.ParseFloat(precioStr, 64)

			if !gestionPlatos.ExistePlato(nombrePlato) {
				gestionPlatos.AgregarPlato(nombrePlato, precioPlato)
			}
			gestionPedidos.AgregarPedido(cliente, nombrePlato)
			fmt.Println("Pedido registrado correctamente.")

		case "2":
			gestionPedidos.MostrarPedidos()

		case "3":
			pedido := gestionPedidos.AtenderPedido()
			atencion.Atender(pedido, gestionPlatos)

		case "4":
			atencion.MostrarGanancias()

		case "5":
			fmt.Println("Saliendo del sistema...")
			return

		default:
			fmt.Println("Opción inválida. Por favor ingrese otra opción.")
		}
	}
}
