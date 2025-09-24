from Gestion_pila_cartas import crear_baraja, sacar_carta
from Interfaz_consola import pedir_numero_jugadores, pedir_nombre_jugador, mostrar_mensaje, preguntar_carta, mostrar_cartas_restantes, mostrar_ganador

def jugar_blackjack():
    pila_cartas = crear_baraja()
    jugadores = []

    # Pedir jugadores
    n = pedir_numero_jugadores()
    for i in range(n):
        nombre = pedir_nombre_jugador(i+1)
        jugadores.append({"nombre": nombre, "puntos": 0, "activo": True})

    # Turnos
    for jugador in jugadores:
        mostrar_mensaje(f"--- Turno de {jugador['nombre']} ---")
        while jugador["activo"]:
            carta = sacar_carta(pila_cartas)
            if not carta:
                mostrar_mensaje("No quedan cartas en la pila.")
                break
            jugador["puntos"] += carta[1]
            mostrar_mensaje(f"Carta obtenida: {carta[0]} (Total: {jugador['puntos']})")
            mostrar_cartas_restantes(len(pila_cartas))

            if jugador["puntos"] > 21:
                mostrar_mensaje(f"{jugador['nombre']} se pasó de 21 y pierde.")
                jugador["activo"] = False
                break

            if not preguntar_carta():
                mostrar_mensaje(f"{jugador['nombre']} se planta con {jugador['puntos']} puntos.")
                jugador["activo"] = False

    # Determinar ganador
    jugadores_validos = [j for j in jugadores if j["puntos"] <= 21]
    if jugadores_validos:
        ganador = max(jugadores_validos, key=lambda x: x["puntos"])
        mostrar_ganador(ganador)
        guardar_ganador(ganador)
    else:
        mostrar_mensaje("Nadie ganó esta ronda.")

def guardar_ganador(ganador):
    with open("ganadores.txt", "a") as f:
        f.write(f"{ganador['nombre']} ganó con {ganador['puntos']} puntos\n")

if __name__ == "__main__":
    print("Bienvenido al juego de 21.")
    jugar_blackjack()