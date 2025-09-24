import java.util.HashMap;

public class GestionPlatos {
    private HashMap<String, Plato> menu = new HashMap<>();

    public void agregarPlato(String nombre, double precio) {
        if (menu.containsKey(nombre)) {
            System.out.println("El playo ya está dentro del menú.");
        } else {
            menu.put(nombre, new Plato(nombre, precio));
            System.out.println("Plato agregado exitosamente.");
        }
    }

    public void mostrarMenu() {
        System.out.println("\n--- Menú de Platos ---");
        if (menu.isEmpty()) {
            System.out.println("No hay platos dentro del menú.");
        } else {
            for(Plato plato : menu.values()) {
                System.out.println(plato);
            }
        }
    }

    public boolean existePlato(String nombre) {
        return menu.containsKey(nombre);
    }

    public double obtenerPrecio(String nombre) {
        return menu.containsKey(nombre) ? menu.get(nombre).getPrecio() : 0;
    }
}
