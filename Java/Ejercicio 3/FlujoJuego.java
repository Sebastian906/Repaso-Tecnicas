import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class FlujoJuego {
    public static void main(String[] args) {
        System.out.println("Bienvenido al juego de 21");
        jugarBlackjack();
    }

    public static void jugarBlackjack() {
        Stack<Map.Entry<String,Integer>> pilaCartas = GestionPilaCartas.crearBaraja();
        List<Map<String,Object>> jugadores = new ArrayList<>();

        int n = InterfazConsola.pedirNumeroJugadores();
        for (int i = 0; i < n; i++) {
            String nombre = InterfazConsola.pedirNombreJugador(i+1);
            Map<String,Object> jugador = new HashMap<>();
            jugador.put("nombre", nombre);
            jugador.put("puntos", 0);
            jugador.put("activo", true);
            jugadores.add(jugador);
        }

        for (var jugador : jugadores) {
            InterfazConsola.mostrarMensaje("--- Turno de " + jugador.get("nombre") + " ---");
            while ((boolean)jugador.get("activo")) {
                var carta = GestionPilaCartas.sacarCarta(pilaCartas);
                if (carta == null) break;
                jugador.put("puntos", (int)jugador.get("puntos") + carta.getValue());
                InterfazConsola.mostrarMensaje("Carta obtenida: " + carta.getKey() + 
                    " (Total: " + jugador.get("puntos") + ")");
                InterfazConsola.mostrarCartasRestantes(pilaCartas.size());

                if ((int)jugador.get("puntos") > 21) {
                    InterfazConsola.mostrarMensaje(jugador.get("nombre") + " se pasó de 21 y pierde.");
                    jugador.put("activo", false);
                    break;
                }
                if (!InterfazConsola.preguntarCarta()) {
                    InterfazConsola.mostrarMensaje(jugador.get("nombre") + " se planta con " + jugador.get("puntos"));
                    jugador.put("activo", false);
                }
            }
        }

        jugadores.removeIf(j -> (int)j.get("puntos") > 21);
            if (!jugadores.isEmpty()) {
                int maxPuntos = Collections.max(jugadores, Comparator.comparingInt(j -> (int)j.get("puntos"))).get("puntos") instanceof Integer ? (int) Collections.max(jugadores, Comparator.comparingInt(j -> (int)j.get("puntos"))).get("puntos") : 0;
                List<Map<String,Object>> empatados = new ArrayList<>();
                for (var j : jugadores) {
                    if ((int)j.get("puntos") == maxPuntos) {
                        empatados.add(j);
                    }
                }
                if (empatados.size() > 1) {
                    InterfazConsola.mostrarMensaje("Hay empate entre los siguientes jugadores:");
                    for (var j : empatados) {
                        InterfazConsola.mostrarMensaje("- " + j.get("nombre") + " con " + j.get("puntos") + " puntos");
                    }
                    jugarDesempate(empatados);
                } else {
                    var ganador = empatados.get(0);
                    InterfazConsola.mostrarGanador((String)ganador.get("nombre"), (int)ganador.get("puntos"));
                    guardarGanador((String)ganador.get("nombre"), (int)ganador.get("puntos"));
                }
            } else {
                InterfazConsola.mostrarMensaje("Nadie ganó esta ronda.");
            }
    }

    private static void guardarGanador(String nombre, int puntos) {
        try (FileWriter fw = new FileWriter("ganadores.txt", true)) {
            fw.write(nombre + " ganó con " + puntos + " puntos\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Método para ronda de desempate
    private static void jugarDesempate(List<Map<String,Object>> jugadoresEmpatados) {
        InterfazConsola.mostrarMensaje("--- RONDA DE DESEMPATE ---");
        Stack<Map.Entry<String,Integer>> pilaCartas = GestionPilaCartas.crearBaraja();
        for (var jugador : jugadoresEmpatados) {
            jugador.put("puntos", 0);
            jugador.put("activo", true);
        }
        for (var jugador : jugadoresEmpatados) {
            InterfazConsola.mostrarMensaje("--- Turno de " + jugador.get("nombre") + " ---");
            while ((boolean)jugador.get("activo")) {
                var carta = GestionPilaCartas.sacarCarta(pilaCartas);
                if (carta == null) break;
                jugador.put("puntos", (int)jugador.get("puntos") + carta.getValue());
                InterfazConsola.mostrarMensaje("Carta obtenida: " + carta.getKey() + " (Total: " + jugador.get("puntos") + ")");
                InterfazConsola.mostrarCartasRestantes(pilaCartas.size());
                if ((int)jugador.get("puntos") > 21) {
                    InterfazConsola.mostrarMensaje(jugador.get("nombre") + " se pasó de 21 y pierde.");
                    jugador.put("activo", false);
                    break;
                }
                if (!InterfazConsola.preguntarCarta()) {
                    InterfazConsola.mostrarMensaje(jugador.get("nombre") + " se planta con " + jugador.get("puntos"));
                    jugador.put("activo", false);
                }
            }
        }
        jugadoresEmpatados.removeIf(j -> (int)j.get("puntos") > 21);
        if (!jugadoresEmpatados.isEmpty()) {
            int maxPuntos = Collections.max(jugadoresEmpatados, Comparator.comparingInt(j -> (int)j.get("puntos"))).get("puntos") instanceof Integer ? (int) Collections.max(jugadoresEmpatados, Comparator.comparingInt(j -> (int)j.get("puntos"))).get("puntos") : 0;
            List<Map<String,Object>> empatados = new ArrayList<>();
            for (var j : jugadoresEmpatados) {
                if ((int)j.get("puntos") == maxPuntos) {
                    empatados.add(j);
                }
            }
            if (empatados.size() > 1) {
                InterfazConsola.mostrarMensaje("Empate nuevamente entre:");
                for (var j : empatados) {
                    InterfazConsola.mostrarMensaje("- " + j.get("nombre") + " con " + j.get("puntos") + " puntos");
                }
                jugarDesempate(empatados);
            } else {
                var ganador = empatados.get(0);
                InterfazConsola.mostrarGanador((String)ganador.get("nombre"), (int)ganador.get("puntos"));
                guardarGanador((String)ganador.get("nombre"), (int)ganador.get("puntos"));
            }
        } else {
            InterfazConsola.mostrarMensaje("Nadie ganó la ronda de desempate.");
        }
    }
}
