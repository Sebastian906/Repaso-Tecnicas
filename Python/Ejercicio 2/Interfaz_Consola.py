from Gestion_de_Platos import GestionPlatos
from Gestion_de_Pedidos import GestionPedidos
from Atencion_de_Pedidos import AtencionPedidos

def mostrar_menu():
    print("\n--- Menú principal ---")
    print("1. Agregar un nuevo plato")
    print("2. Mostrar platos disponibles")
    print("3. Agregar nuevo pedido")
    print("4. Mostrar pedidos pendientes")
    print("5. Atender pedido")
    print("6. Ganancias")
    print("7. Salir")

def main():
    gestion_platos = GestionPlatos()
    gestion_pedidos = GestionPedidos()
    atencion = AtencionPedidos()

    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            nombre = input("Ingrese el nombre del plato: ")
            precio = float(input("Ingrese el precio del plato: "))
            gestion_platos.agregar_plato(nombre, precio)

        elif opcion == "2":
            gestion_platos.mostrar_menu()

        elif opcion == "3":
            cliente = input("Ingrese el nombre del cliente: ")
            plato = input("Ingrese el nombre del plato: ")
            if gestion_platos.existe_plato(plato):
                gestion_pedidos.agregar_pedido(cliente, plato)
            else:
                print("El plato no existe en el menú.")

        elif opcion == "4":
            gestion_pedidos.mostrar_pedidos()

        elif opcion == "5":
            pedido = gestion_pedidos.atender_pedido()
            atencion.atender(pedido, gestion_platos)

        elif opcion == "6":
            atencion.mostrar_ganancias()

        elif opcion == "7":
            print("Saliendo del sistema...")
            break

        else:
            print("Opción inválida. Por favor ingrese otro opción.")

if __name__ == "__main__":
    main()