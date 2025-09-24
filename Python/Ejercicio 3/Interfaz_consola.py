def pedir_numero_jugadores():
    return int(input("Ingrese el número de jugadores: "))

def pedir_nombre_jugador(indice):
    return input(f"Jugador {indice}, ingrese su nombre: ")

def preguntar_carta():
    opcion = input("¿Quieres otra carta? (s/n): ").lower()
    return opcion == "s"

def mostrar_mensaje(msg):
    print(msg)

def mostrar_cartas_restantes(num):
    print(f"Cartas restantes en la pila: {num}")

def mostrar_ganador(ganador):
    print(f"¡{ganador['nombre']} gana con {ganador['puntos']} puntos!")
