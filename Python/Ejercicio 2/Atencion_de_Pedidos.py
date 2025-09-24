class AtencionPedidos:
    def __init__(self):
        self.ganancias = 0

    def atender(self, pedido, gestion_platos):
        """
        Función para gestionar la atención de los platos de acuerdo a su cliente
        """
        if pedido:
            precio = gestion_platos.obtener_precio(pedido.plato)
            if precio:
                self.ganancias += precio
                print(f"Atendiendo pedido de {pedido.cliente} - {pedido.plato}")
            else:
                print("El plato no existe en el menú.")
        else:
            print("No hay pedidos para atender.")

    def mostrar_ganancias(self):
        print(f"Ganancias totales: ${self.ganancias:.2f}")