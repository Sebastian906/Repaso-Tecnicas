import { vocabulario } from "./gestionVocabulario";
import { question } from "readline-sync";

export function iniciarEvaluacion() {
    if (vocabulario.length === 0) {
        console.log("No hay palabras.");
        return;
    }

    vocabulario.sort((a, b) => b.errores - a.errores);

    for (let i = 0; i < vocabulario.length; i++) {
        const item = vocabulario[i];
        const resp = question(`Traduce al español: "${item.palabra}" -> `).toLowerCase();

        if (resp === item.significado) {
            item.aciertos++;
            console.log("Correcto!");
            if (item.aciertos >= 5) {
                console.log(`Aprendida: ${item.palabra}`);
                vocabulario.splice(i, 1);
                i--;
            }
        } else {
            console.log(`Incorrecto. Respuesta: ${item.significado}`);
            item.aciertos = 0;
            item.errores++;
        }
    }
}