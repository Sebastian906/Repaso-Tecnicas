class Plato:
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

    def __str__(self):
        return f"{self.nombre} - ${self.precio:.2f}"
    
class GestionPlatos:
    def __init__(self):
        self.menu = {}

    def agregar_plato(self, nombre, plato):
        """
        Función CRUD para agregar/crear el plato
        """
        if nombre in self.menu:
            print("El plato ya existe en el menú")
        else:
            self.menu[nombre] = Plato(nombre, plato)
            print("Playo agregado en el menú")

    def mostrar_menu(self):
        """
        Función CRUD para listar los platos agregados al menú
        """
        print("\n--- Menú de platos ---")
        if not self.menu:
            print("No hay platos registrados.")
        else:
            for plato in self.menu.values():
                print(plato)
            with open("menu.txt", "a") as f:
                f.write(f"{str(plato)}\n")

    def existe_plato(self, nombre):
        """
        Función CRUD para mostrar nombre del plato
        """
        return nombre in self.menu

    def obtener_precio(self, nombre):
        """
        Función CRUD para retornar precio de un plato
        """
        return self.menu[nombre].precio if nombre in self.menu else None