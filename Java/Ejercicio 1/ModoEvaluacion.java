import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class ModoEvaluacion {
    public static void iniciarEvaluacion() {
        if (GestionVocabulario.vocabulario.isEmpty()) {
            System.out.println("No hay palabras.");
            return;
        }

        // Ordenar por errores
        Collections.sort(GestionVocabulario.vocabulario,
                Comparator.comparingInt((Palabra p) -> p.errores).reversed());

        Scanner sc = new Scanner(System.in);
        for (Palabra p : GestionVocabulario.vocabulario.toArray(new Palabra[0])) {
            System.out.print("Traduce al español: " + p.palabra + " → ");
            String resp = sc.nextLine().toLowerCase();

            if (resp.equals(p.significado)) {
                p.aciertos++;
                System.out.println("Correcto!");
                if (p.aciertos >= 5) {
                    System.out.println("Palabra aprendida: " + p.palabra);
                    GestionVocabulario.vocabulario.remove(p);
                }
            } else {
                System.out.println("Incorrecto. Respuesta Correcta: " + p.significado);
                p.aciertos = 0;
                p.errores++;
            }
        }
    }
}
