package main

import (
	"bufio"
	"fmt"
	"strings"
)

func AgregarPalabra(diccionario map[string]string, scanner *bufio.Scanner) {
	fmt.Print("Ingrese la palabra en ingles: ")
	scanner.Scan()
	eng := strings.TrimSpace(scanner.Text())

	fmt.Print("Ingrese la traducción en español: ")
	scanner.Scan()
	esp := strings.TrimSpace(scanner.Text())

	diccionario[eng] = esp
	fmt.Println("Palabra agregada correctamente.")
}

func BuscarPalabra(diccionario map[string]string, scanner *bufio.Scanner) {
	fmt.Print("Ingrese la palabra en ingles a buscar: ")
	scanner.Scan()
	eng := strings.TrimSpace(scanner.Text())

	if esp, ok := diccionario[eng]; ok {
		fmt.Printf("La traducción en español es: %s\n", esp)
	} else {
		fmt.Println("Palabra no encontrada en el diccionario.")
	}
}

func EditarPalabra(diccionario map[string]string, scanner *bufio.Scanner) {
	fmt.Print("Ingrese la palabra en ingles que desea editar: ")
	scanner.Scan()
	eng := strings.TrimSpace(scanner.Text())

	if _, ok := diccionario[eng]; ok {
		fmt.Print("Ingrese la nueva traducción: ")
		scanner.Scan()
		esp := strings.TrimSpace(scanner.Text())
		diccionario[eng] = esp
		fmt.Println("Traducción actualizada correctamente.")
	} else {
		fmt.Println("Palabra no encontrada.")
	}
}

func EliminarPalabra(diccionario map[string]string, scanner *bufio.Scanner) {
	fmt.Print("Ingrese la palabra en ingles que desea eliminar: ")
	scanner.Scan()
	eng := strings.TrimSpace(scanner.Text())

	if _, ok := diccionario[eng]; ok {
		delete(diccionario, eng)
		fmt.Println("Palabra eliminada correctamente.")
	} else {
		fmt.Println("Palabra no encontrada.")
	}
}
