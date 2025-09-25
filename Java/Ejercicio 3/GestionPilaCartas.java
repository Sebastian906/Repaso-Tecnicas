import java.util.*;

public class GestionPilaCartas {
    private static final Map<String, Integer> valores = Map.ofEntries(
        Map.entry("2", 2), Map.entry("3", 3), Map.entry("4", 4), Map.entry("5", 5),
        Map.entry("6", 6), Map.entry("7", 7), Map.entry("8", 8), Map.entry("9", 9),
        Map.entry("10", 10), Map.entry("J", 10), Map.entry("Q", 10), Map.entry("K", 10),
        Map.entry("A", 11)
    );

    public static Stack<Map.Entry<String,Integer>> crearBaraja() {
        List<Map.Entry<String,Integer>> baraja = new ArrayList<>();
        for (var entry : valores.entrySet()) {
            for (int i = 0; i < 4; i++) {
                baraja.add(entry);
            }
        }
        Collections.shuffle(baraja);
        Stack<Map.Entry<String,Integer>> pila = new Stack<>();
        pila.addAll(baraja);
        return pila;
    }

    public static Map.Entry<String,Integer> sacarCarta(Stack<Map.Entry<String,Integer>> pila) {
        return pila.isEmpty() ? null : pila.pop();
    }
}
