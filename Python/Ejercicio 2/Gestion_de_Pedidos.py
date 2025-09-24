from collections import deque

class Pedido:
    def __init__(self, cliente, plato):
        self.cliente = cliente
        self.plato = plato

    def __str__(self):
        return f"{self.cliente} - {self.plato}"
    
class GestionPedidos:
    def __init__(self):
        self.pedidos = deque()

    def agregar_pedido(self, cliente, plato):
        """
        Función CRUD para agregar un pedido
        """
        self.pedidos.append(Pedido(cliente, plato))
        print("Pedido agregado.")

    def mostrar_pedidos(self):
        """
        Función CRUD para mostrar los pedidos en el programa
        """
        print("\n--- Pedidos ---")
        if not self.pedidos:
            print("No se han encontrado pedidos.")
        else:
            for i, pedido in enumerate(self.pedidos, start=1):
                print(f"{i}. {pedido}")

    def atender_pedido(self):
        """
        Función CRUD para ordenar los pedidos por orden de prioridad
        """
        if not self.pedidos:
            return None
        return self.pedidos.popleft()