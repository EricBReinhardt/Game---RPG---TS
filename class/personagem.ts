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

// // Classe base para itens
// class Item {
//     nome: string;
//     tipo: string;
//     atributos: { [key: string]: number };

//     constructor(nome: string, tipo: string, atributos: { [key: string]: number }) {
//         this.nome = nome;
//         this.tipo = tipo;
//         this.atributos = atributos;
//     }

//     aplicarEfeito(personagem: Personagem): void {
//         // Método a ser sobrescrito nas subclasses
//         console.log(`${this.nome} não tem efeito definido.`);
//     }
// }

// // Classe para itens consumíveis
// class Consumivel extends Item {
//     constructor(nome: string, atributos: { [key: string]: number }) {
//         super(nome, 'consumível', atributos);
//     }

//     aplicarEfeito(personagem: Personagem): void {
//         console.log(`Usando ${this.nome}.`);

//         for (const [atributo, valor] of Object.entries(this.atributos)) {
//             if (atributo === 'vida') {
//                 personagem.vida += valor;
//                 if (personagem.vida > personagem.maxVida) {
//                     personagem.vida = personagem.maxVida;
//                 }
//             } else if (atributo === 'mana') {
//                 personagem.mana += valor;
//                 if (personagem.mana > personagem.maxMana) {
//                     personagem.mana = personagem.maxMana;
//                 }
//             } else if (atributo === 'stamina') {
//                 personagem.stamina += valor;
//                 if (personagem.stamina > personagem.maxStamina) {
//                     personagem.stamina = personagem.maxStamina;
//                 }
//             }
//         }

//         console.log(`${this.nome} usado com sucesso.`);
//     }
// }

// // Classe para armas
// class Arma extends Item {
//     constructor(nome: string, atributos: { [key: string]: number }) {
//         super(nome, 'arma', atributos);
//     }

//     aplicarEfeito(personagem: Personagem): void {
//         console.log(`Equipando ${this.nome}.`);

//         for (const [atributo, valor] of Object.entries(this.atributos)) {
//             if (atributo in personagem) {
//                 (personagem as any)[atributo] += valor;
//             }
//         }

//         console.log(`${this.nome} equipada com sucesso.`);
//     }
// }

// // Classe para armaduras
// class Armadura extends Item {
//     constructor(nome: string, atributos: { [key: string]: number }) {
//         super(nome, 'armadura', atributos);
//     }

//     aplicarEfeito(personagem: Personagem): void {
//         console.log(`Equipando ${this.nome}.`);

//         for (const [atributo, valor] of Object.entries(this.atributos)) {
//             if (atributo in personagem) {
//                 (personagem as any)[atributo] += valor;
//             }
//         }

//         console.log(`${this.nome} equipada com sucesso.`);
//     }
// }

// Definindo itens específicos com base na descrição fornecida
// const poçãoDeVida = new Consumivel('Poção de Vida', { vida: 50 });
// const poçãoDeMana = new Consumivel('Poção de Mana', { mana: 50 });
// const poçãoDeStamina = new Consumivel('Poção de Stamina', { stamina: 50 });
// const arcoÉlfico = new Arma('Arco Élfico', { destreza: 10 });
// const adagaAmaldiçoada = new Arma('Adaga Amaldiçoada', { forca: 10, destreza: 20, maxVida: -100 });
// const espadaDoAntigoHeroi = new Arma('Espada do Antigo Herói', { forca: 10 });
// const machadoSedentoDeSangue = new Arma('Machado Sedento de Sangue', { forca: 15, maxVida: -50 });
// const chicoteDeGaia = new Arma('Chicote de Gaia', { destreza: 15, maxStamina: 50 });
// const espadasDuplasDoMercenario = new Arma('Espadas Duplas do Mercenário', { forca: 20, destreza: 10 });
// const varinhaDoProfessor = new Arma('Varinha do Professor', { intelecto: 20, maxMana: 25 });
// const cajadoDraconico = new Arma('Cajado Dracônico', { intelecto: 40, maxMana: 50 });
// const necronomicon = new Arma('Necronomicon', { intelecto: 5 });
// const capaInvisivel = new Armadura('Capa Invisível', { defesa: 5, destreza: 5 });
// const armaduraAbencoada = new Armadura('Armadura Abençoada', { defesa: 15, intelecto: 2, forca: 2, maxVida: 150, maxMana: 100 });
// const mantoDoMestreMago = new Armadura('Manto do Mestre Mago', { defesa: 5, intelecto: 10, maxMana: 500 });
// const roupasDoDeusMensageiro = new Armadura('Roupas do Deus Mensageiro', { defesa: 5, destreza: 10, maxStamina: 500 });
// const armaduraDeShiva = new Armadura('Armadura de Shiva', { defesa: 5, forca: 10, maxVida: 500 });
// const couracaDoMartyr = new Armadura('Couraça do Martyr', { defesa: 7, maxVida: 50, forca: 2 });
// const mantoDeChamas = new Armadura('Manto de Chamas', { defesa: 10, forca: 5, intelecto: 5, destreza: 5 });
