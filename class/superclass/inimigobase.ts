import { Util } from '../../Util';
import { Base } from './base';

export class InimigoBase extends Base {
    protected itens: Set<string>;
    protected chanceItem: number;
    protected debuffVeneno: number;

    constructor(
        nome: string,
        nivel: number,
        vida: number,
        mana: number,
        stamina: number,
        forca: number,
        intelecto: number,
        destreza: number,
        defesa: number,
        exp: number,
        gold: number,
        itens: Set<string>,
        chanceItem: number,
        debuffVeneno: number
    ) {
        super(nome, nivel, vida, mana, stamina, forca, intelecto, destreza, defesa, exp, gold);
        this.itens = itens;
        this.chanceItem = chanceItem;
        this.debuffVeneno = debuffVeneno;
    }

    // Getters
    public getItens(): Set<string> {
        return this.itens;
    }

    public getChanceItem(): number {
        return this.chanceItem;
    }

    public getDebuffVeneno(): number {
        return this.debuffVeneno;
    }

    // Setters
    public setItens(itens: Set<string>): void {
        this.itens = itens;
    }

    public setChanceItem(chanceItem: number): void {
        this.chanceItem = chanceItem;
    }

    public setDebuffVeneno(debuffVeneno: number): void {
        this.debuffVeneno = debuffVeneno;
    }

    // Método para mostrar status específico de inimigos
    public mostrarStatusInimigo(): void {
        console.log(`Itens: ${Array.from(this.itens).join(", ")}`);
        console.log(`Chance de Dropar Item: ${this.chanceItem}%`);
        console.log(`Debuff Veneno: ${this.debuffVeneno}`);
    }
}