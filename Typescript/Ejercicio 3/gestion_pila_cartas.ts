export class GestionPilaCartas {
    private pila: string[];

    constructor() {
        this.pila = this.crearBaraja();
    }

    private crearBaraja(): string[] {
        const cartas = [
            "A","2","3","4","5","6","7","8","9","10","J","Q","K"
        ];
        const baraja: string[] = [];
        for (let i = 0; i < 4; i++) {
            baraja.push(...cartas);
        }
        return this.shuffle(baraja);
    }

    private shuffle(array: string[]): string[] {
        return array.sort(() => Math.random() - 0.5);
    }

    sacarCarta(): string | undefined {
        return this.pila.pop();
    }

    cartasRestantes(): number {
        return this.pila.length;
    }
}
