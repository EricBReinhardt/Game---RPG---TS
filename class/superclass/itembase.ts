import promptSync from "prompt-sync";
import { Base } from "./base";

export class ItemBase extends Base {
    protected preco: number;
    protected tipo: "consumivel" | "arma" | "armadura";

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
        preco: number,
        tipo: "consumivel" | "arma" | "armadura"
    ) {
        super(nome, nivel, vida, mana, stamina, forca, intelecto, destreza, defesa, exp, gold);
        this.preco = preco;
        this.tipo = tipo;
    }
    // Getters
    public getPreco(): number {
        return this.preco;
    }

    // Setters
    public setPreco(preco: number): void {
        this.preco = preco;
    }
    
    // Método para mostrar status específico de itens
    public mostrarStatusRelevanteItem(tipo: "consumivel" | "arma" | "armadura"): void {
        switch (tipo) {
            case "consumivel":
                console.log(`Nome: ${this.nome}`);
                if (this.vida>0) {
                    console.log(`Efeito: Cura ${this.vida} de vida`);
                }
                if (this.mana>0) {
                    console.log(`Efeito: Recupera ${this.mana} de mana`);
                }
                if (this.stamina>0) {
                    console.log(`Efeito: Regenera ${this.stamina} de stamina`);
                }
                console.log(`Preço: ${this.preco}`);
                break;
            case "arma":
                console.log(`Nome: ${this.nome}`);
                if (this.forca>0) {
                    console.log(`Força: ${this.forca}`);
                }
                if (this.intelecto>0) {
                    console.log(`Intelecto: ${this.intelecto}`);
                }
                if (this.destreza>0) {
                    console.log(`Destreza: ${this.destreza}`);
                }
                if (this.defesa>0) {
                    console.log(`Defesa: ${this.defesa}`);
                }
                if (this.maxVida>0) {
                    console.log(`Vida: ${this.vida}`);
                }
                if (this.maxMana>0) {
                    console.log(`Mana: ${this.mana}`);
                }
                if (this.maxStamina>0) {
                    console.log(`Stamina: ${this.stamina}`);
                }
                console.log(`Preço: ${this.preco}`);
                break;
            case "armadura":
                console.log(`Nome: ${this.nome}`);
                if (this.forca>0) {
                    console.log(`Força: ${this.forca}`);
                }
                if (this.intelecto>0) {
                    console.log(`Intelecto: ${this.intelecto}`);
                }
                if (this.destreza>0) {
                    console.log(`Destreza: ${this.destreza}`);
                }
                if (this.defesa>0) {
                    console.log(`Defesa: ${this.defesa}`);
                }
                if (this.maxVida>0) {
                    console.log(`Vida: ${this.vida}`);
                }
                if (this.maxMana>0) {
                    console.log(`Mana: ${this.mana}`);
                }
                if (this.maxStamina>0) {
                    console.log(`Stamina: ${this.stamina}`);
                }
                console.log(`Preço: ${this.preco}`);
                break;
        }
    }
}