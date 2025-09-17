import java.util.ArrayList;
import java.util.List;

class Palabra {
    String palabra;
    String significado;
    int aciertos;
    int errores;

    Palabra(String palabra, String significado) {
        this.palabra = palabra.toLowerCase();
        this.significado = significado.toLowerCase();
        this.aciertos = 0;
        this.errores = 0;
    }
}

public class GestionVocabulario {
    public static List<Palabra> vocabulario = new ArrayList<>();

    public static void agregarPalabra(String palabra, String significado) {
        vocabulario.add(new Palabra(palabra, significado));
        System.out.println("Palabra agregada: " + palabra);
    }

    public static Palabra buscarPalabra(String palabra) {
        for (Palabra p : vocabulario) {
            if (p.palabra.equalsIgnoreCase(palabra)) {
                System.out.println("Palabra buscada: " + p.palabra + " -> " + p.significado);
                return p;
            }
        }
        System.out.println("Palabra no encontrada");
        return null;
    }

    public static void editarPalabra(String palabra, String nueva, String significado) {
        Palabra p = buscarPalabra(palabra);
        if (p != null) {
            p.palabra = nueva.toLowerCase();
            p.palabra = significado.toLowerCase();
            System.out.println("Palabra editada: " + nueva);
        }
    }

    public static void eliminarPalabra(String palabra) {
        Palabra p = buscarPalabra(palabra);
        if (p != null) {
            vocabulario.remove(p);
            System.out.println("Palabra eliminada: " + palabra);
        }
    }
}