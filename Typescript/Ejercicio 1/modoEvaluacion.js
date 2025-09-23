"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniciarEvaluacion = iniciarEvaluacion;
var gestionVocabulario_1 = require("./gestionVocabulario");
var readline_sync_1 = require("readline-sync");
function iniciarEvaluacion() {
    if (gestionVocabulario_1.vocabulario.length === 0) {
        console.log("No hay palabras.");
        return;
    }
    gestionVocabulario_1.vocabulario.sort(function (a, b) { return b.errores - a.errores; });
    for (var i = 0; i < gestionVocabulario_1.vocabulario.length; i++) {
        var item = gestionVocabulario_1.vocabulario[i];
        var resp = (0, readline_sync_1.question)("Traduce al espa\u00F1ol: \"".concat(item.palabra, "\" -> ")).toLowerCase();
        if (resp === item.significado) {
            item.aciertos++;
            console.log("Correcto!");
            if (item.aciertos >= 5) {
                console.log("Aprendida: ".concat(item.palabra));
                gestionVocabulario_1.vocabulario.splice(i, 1);
                i--;
            }
        }
        else {
            console.log("Incorrecto. Respuesta: ".concat(item.significado));
            item.aciertos = 0;
            item.errores++;
        }
    }
}
