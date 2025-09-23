"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vocabulario = void 0;
exports.agregarPalabra = agregarPalabra;
exports.buscarPalabra = buscarPalabra;
exports.editarPalabra = editarPalabra;
exports.eliminarPalabra = eliminarPalabra;
exports.vocabulario = [];
function agregarPalabra(p, s) {
    exports.vocabulario.push({
        palabra: p.toLowerCase(),
        significado: s.toLowerCase(),
        aciertos: 0,
        errores: 0
    });
    console.log("Palabra \"".concat(p, "\" agregada."));
}
function buscarPalabra(p) {
    var item = exports.vocabulario.find(function (x) { return x.palabra === p.toLowerCase(); });
    if (item) {
        console.log("".concat(item.palabra, " -> ").concat(item.significado));
        return item;
    }
    console.log("No encontrada.");
    return null;
}
function editarPalabra(p, np, ns) {
    var item = buscarPalabra(p);
    if (item) {
        item.palabra = np.toLowerCase();
        item.significado = ns.toLowerCase();
        console.log("Editada a ".concat(np));
    }
}
function eliminarPalabra(p) {
    var index = exports.vocabulario.findIndex(function (x) { return x.palabra === p.toLowerCase(); });
    if (index >= 0) {
        exports.vocabulario.splice(index, 1);
        console.log("Eliminada ".concat(p));
    }
    else {
        console.log("No encontrada.");
    }
}
