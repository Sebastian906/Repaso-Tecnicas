from Gestion_de_Vocabulario import vocabulario

def iniciar_evaluacion():
    """
    Función de evaluación presentada al usuario
    """
    if not vocabulario:
        print(f'No hay palabras en vocabulario.')
        return
    
    # Ordenar las palabras: primero las que tienen más errores
    palabras_ordenadas = sorted(vocabulario, key=lambda x: x["errores"], reverse=True)

    for item in palabras_ordenadas:
        respuesta = input(f'Traduce al español: "{item["palabra"]}" -> ').lower()

        if respuesta == item["significado"]:
            item["aciertos"] += 1
            print("Correcto!")
            if item["aciertos"] >= 5:
                print(f'Felicidades! Se ha aprendido la palabra "{item["palabra"]}". Esta será eliminada')
                with open("palabras_eliminadas.txt", "a") as f:
                    f.write(str({item["palabra"]}))
                vocabulario.remove(item)

        else: 
            print(f'Incorrecto: Respuesta correcta: "{item["significado"]}"')
            item["aciertos"] = 0
            item["errores"] += 1
