import java.util.Scanner;

public class InterfazConsola1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n--- Menú Principal ---");
            System.out.println("1. Agregar nueva palabra");
            System.out.println("2. Buscar palabra");
            System.out.println("3. Editar palabra");
            System.out.println("4. Eliminar palabra");
            System.out.println("5. Iniciar evaluación");
            System.out.println("6. Salir");

            String op = sc.nextLine();
            switch (op) {
                case "1":
                    System.out.print("Palabra en inglés: ");
                    String p = sc.nextLine();
                    System.out.print("Significado: ");
                    String s = sc.nextLine();
                    GestionVocabulario.agregarPalabra(p, s);
                    break;

                case "2":
                    System.out.print("Buscar: ");
                    GestionVocabulario.buscarPalabra(sc.nextLine());
                    break;

                case "3":
                    System.out.print("Editar palabra: ");
                    String pe = sc.nextLine();
                    System.out.print("Nueva palabra: ");
                    String np = sc.nextLine();
                    System.out.print("Nuevo significado: ");
                    String ns = sc.nextLine();
                    break;

                case "4":
                    System.out.print("Eliminar: ");
                    GestionVocabulario.eliminarPalabra(sc.nextLine());
                    break;
                    
                case "5":
                    ModoEvaluacion.iniciarEvaluacion();
                    break;

                case "6":
                    System.out.println("Sistema finalizado. Hasta luego");
                    break;

                default:
                    System.out.println("Opción inválida");
                    break;
            }
        }
    }
}
