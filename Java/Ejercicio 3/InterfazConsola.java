import java.util.Scanner;

public class InterfazConsola {
    private static final Scanner sc = new Scanner(System.in);

    public static int pedirNumeroJugadores() {
        System.out.print("Ingrese el número de jugadores: ");
        return sc.nextInt();
    }

    public static String pedirNombreJugador(int indice) {
        System.out.print("Jugador " + indice + ", ingrese su nombre: ");
        return sc.next();
    }

    public static boolean preguntarCarta() {
        System.out.print("¿Quieres otra carta? (s/n): ");
        String opcion = sc.next().toLowerCase();
        return opcion.equals("s");
    }

    public static void mostrarMensaje(String msg) {
        System.out.println(msg);
    }

    public static void mostrarCartasRestantes(int num) {
        System.out.println("Cartas restantes en la pila: " + num);
    }

    public static void mostrarGanador(String nombre, int puntos) {
        System.out.println("¡" + nombre + " gana con " + puntos + " puntos!");
    }
}
