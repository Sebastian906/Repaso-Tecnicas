package main

import "fmt"

type GestionPlatos struct {
	Menu map[string]Plato
}

func NewGestionPlatos() *GestionPlatos {
	return &GestionPlatos{Menu: make(map[string]Plato)}
}

func (gp *GestionPlatos) AgregarPlato(nombre string, precio float64) {
	if _, existe := gp.Menu[nombre]; existe {
		fmt.Println("El plato ya existe en el menú.")
	} else {
		gp.Menu[nombre] = Plato{Nombre: nombre, Precio: precio}
		fmt.Println("Plato agregado exitosamente.")
	}
}

func (gp *GestionPlatos) MostrarMenu() {
	fmt.Println("\n--- Menú de Platos ---")
	if len(gp.Menu) == 0 {
		fmt.Println("No hay platos registrados.")
	} else {
		for _, plato := range gp.Menu {
			fmt.Println(plato)
		}
	}
}

func (gp *GestionPlatos) ExistePlato(nombre string) bool {
	_, existe := gp.Menu[nombre]
	return existe
}

func (gp *GestionPlatos) ObtenerPrecio(nombre string) float64 {
	if plato, existe := gp.Menu[nombre]; existe {
		return plato.Precio
	}
	return 0
}
