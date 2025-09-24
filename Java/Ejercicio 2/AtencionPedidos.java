public class AtencionPedidos {
    private double ganancias = 0;

    public void atender(Pedido pedido, GestionPlatos gestionPlatos) {
        if(pedido != null) {
            double precio = gestionPlatos.obtenerPrecio(pedido.getPlato());
            ganancias += precio;
            System.out.println("Atendiendo pedido de " + pedido.getCliente() + " - " + pedido.getPlato());
        } else {
            System.out.println("No hay ningún pedido.");
        }
    }

    public void mostrarGanancias() {
        System.out.println("Ganancias totales: $" + ganancias);
    }

}
