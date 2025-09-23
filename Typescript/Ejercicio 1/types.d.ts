declare module 'readline-sync' {
    export function question(prompt: string): string;
    export function questionInt(prompt: string): number;
    export function questionFloat(prompt: string): number;
    export function keyIn(query?: string, options?: any): string;
    export function setDefaultOptions(options: any): void;
}