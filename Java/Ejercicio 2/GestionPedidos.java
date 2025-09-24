import java.util.LinkedList;
import java.util.Queue;

public class GestionPedidos {
    private Queue<Pedido> pedidos = new LinkedList<>();

    public void agregarPedido(String cliente, String plato) {
        pedidos.add(new Pedido(cliente, plato));
        System.out.println("Pedido agregado exitosamente.");
    }

    public void mostrarPedidos() {
        System.out.println("\n--- Pedidos Pendientes ---");
        if (pedidos.isEmpty()) {
            System.out.println("No hay pedidos pendientes.");
        } else {
            int i = 1;
            for (Pedido pedido : pedidos) {
                System.out.println(i + ". " + pedido);
                i++;
            }
        }
    }

    public Pedido atenderPedido() {
        return pedidos.poll();
    }
}
