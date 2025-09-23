package main

import (
	"bufio"
	"fmt"
	"strings"
)

func IniciarEvaluacion(diccionario map[string]string, scanner *bufio.Scanner) {
	if len(diccionario) == 0 {
		fmt.Println("No hay palabras en el diccionario para evaluar.")
		return
	}

	fmt.Println("Iniciando evaluación. Escriba la traducción correcta.")
	correctas := 0
	total := len(diccionario)

	for esp, eng := range diccionario {
		fmt.Printf("Traducción de '%s': ", esp)
		scanner.Scan()
		respuesta := strings.TrimSpace(scanner.Text())

		if strings.EqualFold(respuesta, eng) {
			fmt.Println("Correcto")
			correctas++
		} else {
			fmt.Printf("Incorrecto. La respuesta era '%s'\n", eng)
		}
	}

	fmt.Printf("\nResultado: %d/%d correctas\n", correctas, total)
}
