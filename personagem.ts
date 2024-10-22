import promptSync from "prompt-sync";

const prompt = promptSync();

export class Personagem {

    nome: string;
    raca: string;
    classe: string;
    gold: number;
    nivel: number;
    exp: number;
    maxExp: number;
    vida: number;
    maxVida: number;
    mana: number;
    maxMana: number;
    stamina: number;
    maxStamina: number;
    forca: number;
    intelecto: number;
    destreza: number;
    arma: string;
    defesa: number;
    armadura: string;
    inventario: Set<string>;
    spells: Set<string>;
    temGritoDeGuerra: boolean;
    buffGritoDeGuerra: number;
    temTrovao: boolean;
    temMeteoro: boolean;
    temRoubar: boolean;
    temCuraSagrada: boolean;
    temImbuirVeneno: boolean;
    buffImbuirVeneno: number;

    constructor(nome: string, raca: string, classe: string, nivel: number, vida: number, mana: number, stamina: number, forca: number, intelecto: number, destreza: number, defesa: number, arma: string, armadura: string) {
        this.nome = nome;
        this.raca = raca;
        this.classe = classe;
        this.gold = 15;
        this.nivel = nivel;
        this.exp = 0;
        this.maxExp = 50 + (this.nivel * 50);
        this.forca = forca;
        this.vida = vida + (this.forca * 10);
        this.maxVida = this.vida;
        this.intelecto = intelecto;
        this.mana = mana + (this.intelecto * 10);
        this.maxMana = this.mana;
        this.destreza = destreza;
        this.stamina = stamina + (this.destreza * 10);
        this.maxStamina = this.stamina;
        this.arma = arma;
        this.defesa = defesa;
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
    treinarForca(this: Personagem, tempoTreinoHoras: number): void {
        if (tempoTreinoHoras > 2 || tempoTreinoHoras < 1) {
            console.log("\nNúmero inválido de horas.");
        } else if (this.vida < 50) {
            console.log("\nVida máxima menor que 50, tente descansar...");
        } else {
            this.forca += tempoTreinoHoras;
            this.vida -= tempoTreinoHoras * 30;
            console.log(`\nBom treino! Treinar sua força exausta sua vida.\n\nSua força atual é: ${this.forca}\nSua vida atual é: ${this.vida}/${this.maxVida}`);
            this.upar()
        }

    }
    treinarIntelecto(this: Personagem, tempoTreinoHoras: number): void {
        if (tempoTreinoHoras > 2 || tempoTreinoHoras < 1) {
            console.log("\nNúmero inválido de horas.");
        } else if (this.mana < 50) {
            console.log("\nMana máxima menor que 50, tente descansar...");
        } else {
            this.intelecto += tempoTreinoHoras;
            this.mana -= tempoTreinoHoras * 30;
            console.log(`\nBom treino! Treinar seu intelecto exausta sua mana.\n\nSeu intelecto atual é: ${this.intelecto}\nSua mana atual é: ${this.mana}/${this.maxMana}`);
            this.upar()
        }
    }
    treinarDestreza(this: Personagem, tempoTreinoHoras: number): void {
        if (tempoTreinoHoras > 2 || tempoTreinoHoras < 1) {
            console.log("\nNúmero inválido de horas.");
        } else if (this.stamina < 50) {
            console.log("\nStamina máxima menor que 50, tente descansar...");
        } else {
            this.destreza += tempoTreinoHoras;
            this.stamina -= tempoTreinoHoras * 30;
            console.log(`\nBom treino! Treinar sua destreza exausta sua stamina.\n\nSua destreza atual é: ${this.destreza}\nSua stamina atual é: ${this.stamina}/${this.maxStamina}`);
            this.upar()
        }
    }
    descansar(this: Personagem, tempoTreinoHoras: number): void {
        if (tempoTreinoHoras > 2 || tempoTreinoHoras < 1) {
            console.log("\nNúmero inválido de horas.");
        } else if (tempoTreinoHoras == 1) {
            this.vida = this.vida + (this.maxVida * 0.50);
            this.mana = this.mana + (this.maxMana * 0.50);
            this.stamina = this.stamina + (this.maxStamina * 0.50);
            if (this.vida > this.maxVida) {
                this.vida = this.maxVida
            }
            if (this.mana > this.maxMana) {
                this.mana = this.maxMana;
            }
            if (this.stamina > this.maxStamina) {
                this.stamina = this.maxStamina;
            }
            if (this.vida == this.maxVida && this.mana == this.maxMana && this.stamina == this.maxStamina) {
                console.log("\nVocê se sente completamente descansado...");
            } else {
                console.log("\nVocê se sente meio descansado...");
            }
        } else {
            this.vida = this.maxVida;
            this.mana = this.maxMana;
            this.stamina = this.maxStamina;
            console.log("\nVocê se sente completamente descansado...");
        }
    }
    status(): void {
        let barraExp = Math.floor((this.exp * 100) / this.maxExp)
        let barraVida = Math.floor((this.vida * 100) / this.maxVida)
        let barraMana = Math.floor((this.mana * 100) / this.maxMana)
        let barraStamina = Math.floor((this.stamina * 100) / this.maxStamina)
        let barra1 = "/"
        let barra0 = "-"

        console.log("\n========= STATUS =========");
        console.log(`\nNome: ${this.nome}
            \nRaça: ${this.raca}
            \nClasse: ${this.classe}
            \nGold: ${this.gold}
            \nNível: ${this.nivel}
            \nExpêriencia: ${this.exp}/${this.maxExp}
            \n[${barra1.repeat(barraExp)}${barra0.repeat(100 - barraExp)}]
            \nVida: ${this.vida}/${this.maxVida}
            \n[${barra1.repeat(barraVida)}${barra0.repeat(100 - barraVida)}]
            \nMana: ${this.mana}/${this.maxMana}
            \n[${barra1.repeat(barraMana)}${barra0.repeat(100 - barraMana)}]
            \nStamina: ${this.stamina}/${this.maxStamina}
            \n[${barra1.repeat(barraStamina)}${barra0.repeat(100 - barraStamina)}]
            \nForça: ${this.forca}
            \nIntelecto: ${this.intelecto}
            \nDestreza: ${this.destreza}
            \nDefesa: ${this.defesa}
            \nArma: ${this.arma}
            \nArmadura: ${this.armadura} 
            \nMagias: ${this.spells}
            \n`);
    }
    upar(): void {
        while (this.exp >= this.maxExp) {
            let expResto = this.exp - this.maxExp
            this.exp = 0 + expResto
            this.nivel = this.nivel + 1
            console.log("-".repeat(20));
            console.log(`Você passou de nível! Agora você é nível ${this.nivel}`);
    
            this.defesa = this.defesa + 2;
            this.maxVida = this.maxVida + 25;
            this.maxMana = this.maxMana + 25;
            this.maxStamina = this.maxStamina + 25;
    
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
    
                const opcao = Number(prompt("Escolha uma opção: "))
    
                switch (opcao) {
                    case 1:
                        this.forca = this.forca + 2
                        console.log("\nForça + 2!");
                        console.log(`Força: ${this.forca}`);
                        break;
                    case 2:
                        this.intelecto = this.intelecto + 2
                        console.log("\nIntelecto + 2!");
                        console.log(`Intelecto: ${this.intelecto}`);
                        break;
                    case 3:
                        this.destreza = this.destreza + 2
                        console.log("\nDestreza + 2!");
                        console.log(`Destreza: ${this.destreza}`);
                        break;
                    default:
                        break;
                }
            }
        }
        if (this.forca >= 8 && !this.temGritoDeGuerra) {
            console.log("-".repeat(20));
            this.spells.add("Grito de Guerra")
            console.log("\nVocê obteve a habilidade Grito de Guerra!");
            console.log("Grito de Guerra: Dano X 2 por 2 turnos\n");
            console.log("Custo: 80 de Stamina\n");
    
            this.temGritoDeGuerra = true;
            this.spells.add("Grito de Guerra");
        }
        if (this.intelecto >= 8 && !this.temTrovao) {
            console.log("-".repeat(20));
            this.spells.add("Trovão")
            console.log("\nVocê obteve a habilidade Trovão!");
            console.log("Trovão: Causa 30 de dano mágico + Intelecto");
            console.log("Custo: 100 de Mana\n");
    
            this.temTrovao = true;
            this.spells.add("Trovão");
        }
        if (this.intelecto >= 16 && !this.temMeteoro) {
            console.log("-".repeat(20));
            this.spells.add("Meteoro")
            console.log("\nVocê obteve a habilidade Meteoro!");
            console.log("Meteoro: Causa 100 de dano mágico + Intelecto");
            console.log("Custo: 250 de Mana\n");
    
            this.temMeteoro = true;
            this.spells.add("Meteoro");
        }
        if (this.destreza >= 8 && !this.temRoubar) {
            console.log("-".repeat(20));
            this.spells.add("Roubar")
            console.log("\nVocê obteve a habilidade Roubar!");
            console.log("Roubar: Roubar ouro do inimigo e tem chance de roubar um item\n");
            console.log("Custo: 50 de Stamina\n");
    
            this.temRoubar = true;
            this.spells.add("Roubar");
        }
        if (this.forca >= 4 && this.intelecto >= 6 && !this.temCuraSagrada) {
            console.log("-".repeat(20));
            this.spells.add("Cura Sagrada")
            console.log("\nVocê obteve a habilidade Cura Sagrada!");
            console.log("Cura Sagrada: Cura 50 de vida + parte de sua Intelecto e Força\n");
            console.log("Custo: 80 de Mana\n");
    
            this.temCuraSagrada = true;
            this.spells.add("Cura Sagrada");
        }
        if (this.forca >= 4 && this.destreza >= 6 && !this.temImbuirVeneno) {
            console.log("-".repeat(20));
            this.spells.add("Imbuir Veneno")
            console.log("\nVocê obteve a habilidade Imbuir Veneno!");
            console.log("Imbuir Veneno: Seu próximo ataque aplicará veneno ao inimigo por 3 turnos, veneno causa 15 de dano + Destreza e Força\n");
            console.log("Custo: 100 de Stamina\n");
    
            this.temImbuirVeneno = true;
            this.spells.add("Imbuir Veneno");
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
