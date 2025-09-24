import java.util.Scanner;

public class InterfazConsola {
    public static void main(String[] args) {
        GestionPlatos gestionPlatos = new GestionPlatos();
        GestionPedidos gestionPedidos = new GestionPedidos();
        AtencionPedidos atencion = new AtencionPedidos();
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n--- Menú Principal ---");
            System.out.println("1. Agregar nuevo pedido");
            System.out.println("2. Mostrar pedidos pendientes");
            System.out.println("3. Atender pedido");
            System.out.println("4. Mostrar ganancias");
            System.out.println("5. Salir");

            String opcion = sc.nextLine();

            switch (opcion) {
                case "1":
                    System.out.print("Ingrese el nombre del cliente: ");
                    String cliente = sc.nextLine();
                    System.out.print("Ingrese el nombre del plato: ");
                    String nombrePlato = sc.nextLine();
                    System.out.print("Ingrese el precio del plato: ");
                    double precioPlato = Double.parseDouble(sc.nextLine());
                    if (!gestionPlatos.existePlato(nombrePlato)) {
                        gestionPlatos.agregarPlato(nombrePlato, precioPlato);
                    }
                    gestionPedidos.agregarPedido(cliente, nombrePlato);
                    System.out.println("Pedido registrado correctamente.");
                    break;

                case "2":
                    gestionPedidos.mostrarPedidos();
                    break;

                case "3":
                    Pedido pedido = gestionPedidos.atenderPedido();
                    atencion.atender(pedido, gestionPlatos);
                    break;

                case "4":
                    atencion.mostrarGanancias();
                    break;

                case "5":
                    System.out.println("Saliendo del sistema...");
                    return;

                default:
                    System.out.println("Opción inválida. Por favor ingrese otra opción.");
            }
        }
    }
}
