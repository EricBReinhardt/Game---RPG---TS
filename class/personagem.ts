import promptSync from "prompt-sync";
import { Base } from "./superclass/base";

const prompt = promptSync();

export class Personagem extends Base {
    private raca: string;
    private classe: string;
    private maxExp: number;
    private arma: string;
    private armadura: string;
    private inventario: Set<string>;
    private spells: Set<string>;
    private temGritoDeGuerra: boolean;
    private buffGritoDeGuerra: number;
    private temTrovao: boolean;
    private temMeteoro: boolean;
    private temRoubar: boolean;
    private temCuraSagrada: boolean;
    private temImbuirVeneno: boolean;
    private buffImbuirVeneno: number;

    constructor(
        nome: string,
        raca: string,
        classe: string,
        nivel: number,
        vida: number,
        mana: number,
        stamina: number,
        forca: number,
        intelecto: number,
        destreza: number,
        defesa: number,
        arma: string,
        armadura: string
    ) {
        super(nome, nivel, vida, mana, stamina, forca, intelecto, destreza, defesa, 0, 15);
        this.raca = raca;
        this.classe = classe;
        this.maxExp = 50 + (nivel * 50);
        this.arma = arma;
        this.armadura = armadura;
        this.inventario = new Set([arma, armadura]);
        this.spells = new Set([]);
        this.temGritoDeGuerra = false;
        this.buffGritoDeGuerra = 0;
        this.temTrovao = false;
        this.temMeteoro = false;
        this.temRoubar = false;
        this.temCuraSagrada = false;
        this.temImbuirVeneno = false;
        this.buffImbuirVeneno = 0;
    }

    public getRaca(): string {
        return this.raca;
    }

    public getClasse(): string {
        return this.classe;
    }

    public getArma(): string {
        return this.arma;
    }

    public getArmadura(): string {
        return this.armadura;
    }

    public getInventario(): Set<string> {
        return this.inventario;
    }

    public getSpells(): Set<string> {
        return this.spells;
    }

    public getBuffGritoDeGuerra(): number {
        return this.buffGritoDeGuerra;
    }

    public getBuffImbuirVeneno(): number {
        return this.buffImbuirVeneno;
    }

    public setRaca(raca: string): void {
        this.raca = raca;
    }

    public setClasse(classe: string): void {
        this.classe = classe;
    }

    public setArma(arma: string): void {
        this.arma = arma;
    }

    public setArmadura(armadura: string): void {
        this.armadura = armadura;
    }

    public setInventario(inventario: Set<string>): void {
        this.inventario = inventario;
    }

    public setSpells(spells: Set<string>): void {
        this.spells = spells;
    }

    public setBuffGritoDeGuerra(buffGritoDeGuerra: number): void {
        this.buffGritoDeGuerra = buffGritoDeGuerra;
    }

    public setBuffImbuirVeneno(buffImbuirVeneno: number): void {
        this.buffImbuirVeneno = buffImbuirVeneno;
    }

    public mostrarStatusRelevante(recursoAfetado: "vida" | "mana" | "stamina" | "força" | "intelecto" | "destreza" | "todos"): void {
        super.mostrarStatusRelevante(recursoAfetado);
        
        let barraExp = Math.floor((this.exp * 100) / this.maxExp);
        let barra1 = "/";
        let barra0 = "-";

        if (recursoAfetado === "todos") {
            console.log(`EXP: ${this.exp}/${this.maxExp}`);
            console.log(`[${barra1.repeat(barraExp)}${barra0.repeat(100 - barraExp)}]`);
            console.log(`Ouro: ${this.gold}`);
            console.log(`Raça: ${this.raca}`);
            console.log(`Classe: ${this.classe}`);
            console.log(`Arma: ${this.arma}`);
            console.log(`Armadura: ${this.armadura}`);
            console.log(`Inventário: ${Array.from(this.inventario).join(", ")}`);
            console.log(`Magias: ${Array.from(this.spells).join(", ")}`);
        }
    }

    public equiparItem(item: string): void {
        if (this.inventario.has(item)) {
            if (item.includes("Armadura")) {
                this.armadura = item;
            } else if (item.includes("Arma")) {
                this.arma = item;
            }
            console.log(`Você equipou ${item}`);
        } else {
            console.log("Você não possui esse item no inventário.");
        }
    }

    public mostrarInventario(): void {
        console.log("Inventário:");
        console.log(Array.from(this.inventario).join(", "));
    }

    public upar(): void {
        while (this.exp >= this.maxExp) {
            let expResto = this.exp - this.maxExp;
            this.exp = 0 + expResto;
            this.nivel = this.nivel + 1;
            console.log("-".repeat(20));
            console.log(`Você passou de nível! Agora você é nível ${this.nivel}`);

            this.defesa = this.defesa + 2;
            this.maxVida = this.maxVida + 25;
            this.maxMana = this.maxMana + 25;
            this.maxStamina = this.maxStamina + 25;
            this.maxExp = 50 + (this.nivel * 50); // Atualiza maxExp

            console.log("Defesa + 2!");
            console.log("Vida + 25!");
            console.log("Mana + 25!");
            console.log("Stamina + 25!");

            console.log("\nEscolha 3 status para aprimorar");
            for (let i = 0; i < 3; i++) {
                console.log("\n========= APRIMORAR =========");
                console.log("1 - Força");
                console.log("2 - Intelecto");
                console.log("3 - Destreza\n");

                const opcao = Number(prompt("Escolha uma opção: "));

                switch (opcao) {
                    case 1:
                        this.forca = this.forca + 2;
                        console.log("\nForça + 2!");
                        console.log(`Força: ${this.forca}`);
                        break;
                    case 2:
                        this.intelecto = this.intelecto + 2;
                        console.log("\nIntelecto + 2!");
                        console.log(`Intelecto: ${this.intelecto}`);
                        break;
                    case 3:
                        this.destreza = this.destreza + 2;
                        console.log("\nDestreza + 2!");
                        console.log(`Destreza: ${this.destreza}`);
                        break;
                    default:
                        console.log("\nOpção inválida. Nenhum status foi aprimorado.");
                        break;
                }
            }

            // Verifica e adiciona habilidades ao subir de nível
            if (this.forca >= 8 && !this.temGritoDeGuerra) {
                console.log("-".repeat(20));
                this.spells.add("Grito de Guerra");
                console.log("\nVocê obteve a habilidade Grito de Guerra!");
                console.log("Grito de Guerra: Dano X 2 por 2 turnos\n");
                console.log("Custo: 80 de Stamina\n");
                this.temGritoDeGuerra = true;
            }
            if (this.intelecto >= 8 && !this.temTrovao) {
                console.log("-".repeat(20));
                this.spells.add("Trovão");
                console.log("\nVocê obteve a habilidade Trovão!");
                console.log("Trovão: Causa 30 de dano mágico + Intelecto");
                console.log("Custo: 100 de Mana\n");
                this.temTrovao = true;
            }
            if (this.intelecto >= 16 && !this.temMeteoro) {
                console.log("-".repeat(20));
                this.spells.add("Meteoro");
                console.log("\nVocê obteve a habilidade Meteoro!");
                console.log("Meteoro: Causa 100 de dano mágico + Intelecto");
                console.log("Custo: 250 de Mana\n");
                this.temMeteoro = true;
            }
            if (this.destreza >= 8 && !this.temRoubar) {
                console.log("-".repeat(20));
                this.spells.add("Roubar");
                console.log("\nVocê obteve a habilidade Roubar!");
                console.log("Roubar: Roubar ouro do inimigo e tem chance de roubar um item\n");
                console.log("Custo: 50 de Stamina\n");
                this.temRoubar = true;
            }
            if (this.forca >= 4 && this.intelecto >= 6 && !this.temCuraSagrada) {
                console.log("-".repeat(20));
                this.spells.add("Cura Sagrada");
                console.log("\nVocê obteve a habilidade Cura Sagrada!");
                console.log("Cura Sagrada: Cura 50 de vida + parte de sua Intelecto e Força\n");
                console.log("Custo: 80 de Mana\n");
                this.temCuraSagrada = true;
            }
            if (this.forca >= 4 && this.destreza >= 6 && !this.temImbuirVeneno) {
                console.log("-".repeat(20));
                this.spells.add("Imbuir Veneno");
                console.log("\nVocê obteve a habilidade Imbuir Veneno!");
                console.log("Imbuir Veneno: Seu próximo ataque aplicará veneno ao inimigo por 3 turnos, veneno causa 15 de dano + Destreza e Força\n");
                console.log("Custo: 100 de Stamina\n");
                this.temImbuirVeneno = true;
            }
        }
    }
}