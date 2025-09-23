package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	diccionario := make(map[string]string)
	scanner := bufio.NewScanner(os.Stdin)

	for {
		fmt.Println("\n--- MENÚ ---")
		fmt.Println("1. Agregar palabra")
		fmt.Println("2. Buscar palabra")
		fmt.Println("3. Editar palabra")
		fmt.Println("4. Eliminar palabra")
		fmt.Println("5. Iniciar evaluación")
		fmt.Println("6. Salir")
		fmt.Print("Seleccione una opción: ")

		scanner.Scan()
		opcion := scanner.Text()

		switch opcion {
		case "1":
			AgregarPalabra(diccionario, scanner)
		case "2":
			BuscarPalabra(diccionario, scanner)
		case "3":
			EditarPalabra(diccionario, scanner)
		case "4":
			EliminarPalabra(diccionario, scanner)
		case "5":
			IniciarEvaluacion(diccionario, scanner)
		case "6":
			fmt.Println("Saliendo del programa...")
			return
		default:
			fmt.Println("Opción no válida.")
		}
	}
}
