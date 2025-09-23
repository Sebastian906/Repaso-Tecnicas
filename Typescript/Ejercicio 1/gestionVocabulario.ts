export interface Palabra {
    palabra: String,
    significado: String,
    aciertos: number,
    errores: number,
}

export const vocabulario: Palabra[] = [];

export function agregarPalabra(p: string, s: string) {
    vocabulario.push({ 
        palabra: p.toLowerCase(), 
        significado: s.toLowerCase(), 
        aciertos: 0, 
        errores: 0 
    })
    console.log(`Palabra "${p}" agregada.`);
}

export function buscarPalabra(p: string): Palabra | null {
    const item = vocabulario.find(x => x.palabra === p.toLowerCase());
    if (item) {
        console.log(`${item.palabra} -> ${item.significado}`);
        return item;
    }
    console.log("No encontrada.");
    return null;
}

export function editarPalabra(p: string, np: string, ns: string) {
    const item = buscarPalabra(p);
    if (item) {
        item.palabra = np.toLowerCase();
        item.significado = ns.toLowerCase();
        console.log(`Editada a ${np}`);
    }
}

export function eliminarPalabra(p: string) {
    const index = vocabulario.findIndex(x => x.palabra === p.toLowerCase());
    if (index >= 0) {
        vocabulario.splice(index, 1);
        console.log(`Eliminada ${p}`);
    } else {
        console.log("No encontrada.");
    }
}