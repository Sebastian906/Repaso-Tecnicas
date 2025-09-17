from Gestion_de_Vocabulario import agregar_palabra, buscar_palabra, editar_palabra, eliminar_palabra
from Modo_de_Evaluacion import iniciar_evaluacion

def menu():
    """Menu principal en la consola de usuario"""
    while True:
        print("\n--- Menú Principal ---")
        print("1. Agregar nueva palabra")
        print("2. Buscar palabra")
        print("3. Editar palabra")
        print("4. Eliminar palabra")
        print("5. Iniciar evaluación")
        print("6. Salir")

        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            palabra = input("Ingrese la palabra en ingles: ")
            significado = input("Ingrese el significado en español: ")
            agregar_palabra(palabra, significado)

        elif opcion == "2":
            palabra = input("Ingrese la palabra a buscar: ")
            buscar_palabra(palabra)

        elif opcion == "3":
            palabra = input("Editar una palabra: ")
            nueva_palabra = input("Nueva palabra en ingles: ")
            nuevo_significado = input("Nuevo significado de la palabra: ")
            editar_palabra(palabra, nueva_palabra, nuevo_significado)

        elif opcion == "4":
            palabra = input("Eliminar una palabra: ")
            eliminar_palabra(palabra)

        elif opcion == "5":
            iniciar_evaluacion()

        elif opcion == "6":
            print("Sistema finalizado. hasta luego.")
            break

        else:
            print("Opción no válida. Intentelo de nuevo.")

if __name__ == "__main__":
    menu()