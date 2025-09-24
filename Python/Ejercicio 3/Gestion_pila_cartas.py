import random

def crear_baraja():
    """
    Función para crear la baraja de cartas
    """
    valores = {
        "2": 2, "3": 3, "4": 4, "5": 5, "6": 6,
        "7": 7, "8": 8, "9": 9, "10": 10,
        "J": 10, "Q": 10, "K": 10, "A": 11
    }
    baraja = [(carta, valor) for carta, valor in valores.items() for _ in range(4)]
    random.shuffle(baraja)
    return baraja

def sacar_carta(pila):
    """
    Función para sacar una carta de la baraja mediante una pila
    """
    if pila:
        return pila.pop()
    return None