from Gestion_de_Platos import GestionPlatos
from Gestion_de_Pedidos import GestionPedidos
from Atencion_de_Pedidos import AtencionPedidos

def mostrar_menu():
    print("\n--- Menú principal ---")
    print("1. Agregar nuevo pedido")
    print("2. Mostrar pedidos pendientes")
    print("3. Atender pedido")
    print("4. Ganancias")
    print("5. Salir")

def main():
    gestion_platos = GestionPlatos()
    gestion_pedidos = GestionPedidos()
    atencion = AtencionPedidos()

    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            cliente = input("Ingrese el nombre del cliente: ")
            plato = input("Ingrese el nombre del plato: ")
            precio = float(input("Ingrese el precio del plato: "))
            if not gestion_platos.existe_plato(plato):
                gestion_platos.agregar_plato(plato, precio)
            gestion_pedidos.agregar_pedido(cliente, plato)
            print("Pedido registrado correctamente.")

        elif opcion == "2":
            gestion_pedidos.mostrar_pedidos()
            gestion_platos.mostrar_menu()

        elif opcion == "3":
            pedido = gestion_pedidos.atender_pedido()
            atencion.atender(pedido, gestion_platos)

        elif opcion == "4":
            atencion.mostrar_ganancias()

        elif opcion == "5":
            print("Saliendo del sistema...")
            break

        else:
            print("Opción inválida. Por favor ingrese otro opción.")

if __name__ == "__main__":
    main()