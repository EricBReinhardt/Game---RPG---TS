import promptSync from "prompt-sync";

export class Base {
    protected nome: string;
    protected nivel: number;
    protected vida: number;
    protected maxVida: number;
    protected mana: number;
    protected maxMana: number;
    protected stamina: number;
    protected maxStamina: number;
    protected forca: number;
    protected intelecto: number;
    protected destreza: number;
    protected defesa: number;
    protected exp: number;
    protected gold: number;

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
        gold: number
    ) {
        this.nome = nome;
        this.nivel = nivel;
        this.forca = forca;
        this.intelecto = intelecto;
        this.destreza = destreza;
        this.defesa = defesa;
        this.exp = exp;
        this.gold = gold;

        // Calcula os valores máximos de vida, mana e stamina
        this.maxVida = vida + (forca * 10);
        this.maxMana = mana + (intelecto * 10);
        this.maxStamina = stamina + (destreza * 10);

        // Inicializa vida, mana e stamina com seus valores máximos
        this.vida = this.maxVida;
        this.mana = this.maxMana;
        this.stamina = this.maxStamina;
    }

    // Getters
    public getNome(): string {
        return this.nome;
    }

    public getNivel(): number {
        return this.nivel;
    }

    public getVida(): number {
        return this.vida;
    }

    public getMaxVida(): number {
        return this.maxVida;
    }

    public getMana(): number {
        return this.mana;
    }

    public getMaxMana(): number {
        return this.maxMana;
    }

    public getStamina(): number {
        return this.stamina;
    }

    public getMaxStamina(): number {
        return this.maxStamina;
    }

    public getForca(): number {
        return this.forca;
    }

    public getIntelecto(): number {
        return this.intelecto;
    }

    public getDestreza(): number {
        return this.destreza;
    }

    public getDefesa(): number {
        return this.defesa;
    }

    public getExp(): number {
        return this.exp;
    }

    public getGold(): number {
        return this.gold;
    }

    // Setters
    public setNome(nome: string): void {
        this.nome
    }

    public setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    public setVida(vida: number): void {
        this.vida = vida;
    }

    public setMana(mana: number): void {
        this.mana = mana;
    }

    public setStamina(stamina: number): void {
        this.stamina = stamina;
    }

    public setForca(forca: number): void {
        this.forca = forca;
    }

    public setIntelecto(intelecto: number): void {
        this.intelecto = intelecto;
    }

    public setDestreza(destreza: number): void {
        this.destreza = destreza;
    }

    public setDefesa(defesa: number): void {
        this.defesa = defesa;
    }

    public setExp(exp: number): void {
        this.exp = exp;
    }

    public setGold(gold: number): void {
        this.gold = gold;
    }

    public mostrarStatusRelevante(recursoAfetado: "vida" | "mana" | "stamina" | "força" | "intelecto" | "destreza" | "todos"): void {
        let barraVida = Math.floor((this.vida * 100) / this.maxVida);
        let barraMana = Math.floor((this.mana * 100) / this.maxMana);
        let barraStamina = Math.floor((this.stamina * 100) / this.maxStamina);
        let barra1 = "/";
        let barra0 = "-";

        switch (recursoAfetado) {
            case "vida":
                console.log(`Vida atual: ${this.vida}/${this.maxVida}`);
                break;
            case "mana":
                console.log(`Mana atual: ${this.mana}/${this.maxMana}`);
                break;
            case "stamina":
                console.log(`Stamina atual: ${this.stamina}/${this.maxStamina}`);
                break;
            case "força":
                console.log(`Força atual: ${this.forca}`);
                break;
            case "intelecto":
                console.log(`Intelecto atual: ${this.intelecto}`);
                break;
            case "destreza":
                console.log(`Destreza atual: ${this.destreza}`);
                break;
            case "todos":
                console.log("\n========= STATUS =========");
                console.log(`Nome: ${this.nome}`);
                console.log(`Vida: ${this.vida}/${this.maxVida}`);
                console.log(`[${barra1.repeat(barraVida)}${barra0.repeat(100 - barraVida)}]`);
                console.log(`Mana: ${this.mana}/${this.maxMana}`);
                console.log(`[${barra1.repeat(barraMana)}${barra0.repeat(100 - barraMana)}]`);
                console.log(`Stamina: ${this.stamina}/${this.maxStamina}`);
                console.log(`[${barra1.repeat(barraStamina)}${barra0.repeat(100 - barraStamina)}]`);
                console.log(`Força: ${this.forca}`);
                console.log(`Intelecto: ${this.intelecto}`);
                console.log(`Destreza: ${this.destreza}`);
                console.log(`Defesa: ${this.defesa}`);
            default:
                console.log("Status não reconhecido.");
                break;
        }
    }

    public treinarForca(tempoTreinoHoras: number): void {
        if (tempoTreinoHoras > 2 || tempoTreinoHoras < 1) {
            console.log("\nNúmero inválido de horas.");
        } else if (this.vida < 50) {
            console.log("\nVida máxima menor que 50, tente descansar...");
        } else {
            this.forca += tempoTreinoHoras;
            this.vida -= tempoTreinoHoras * 30;
            console.log(`\nBom treino! Treinar sua força exausta sua vida.\n\n`);
            this.mostrarStatusRelevante("força");
            this.mostrarStatusRelevante("vida");
        }
    }

    public treinarDestreza(tempoTreinoHoras: number): void {
        if (tempoTreinoHoras > 2 || tempoTreinoHoras < 1) {
            console.log("\nNúmero inválido de horas.");
        } else if (this.stamina < 50) {
            console.log("\nStamina máxima menor que 50, tente descansar...");
        } else {
            this.destreza += tempoTreinoHoras;
            this.stamina -= tempoTreinoHoras * 30;
            console.log(`\nBom treino! Treinar sua destreza exausta sua stamina.\n\n`);
            this.mostrarStatusRelevante("destreza");
            this.mostrarStatusRelevante("stamina");
        }
    }
    public treinarIntelecto(tempoTreinoHoras: number): void {
        if (tempoTreinoHoras > 2 || tempoTreinoHoras < 1) {
            console.log("\nNúmero inválido de horas.");
        } else if (this.mana < 50) {
            console.log("\nMana máxima menor que 50, tente descansar...");
        } else {
            this.intelecto += tempoTreinoHoras;
            this.mana -= tempoTreinoHoras * 30;
            console.log(`\nBom treino! Treinar seu intelecto exausta sua mana.\n\n`);
            this.mostrarStatusRelevante("intelecto");
            this.mostrarStatusRelevante("mana");
        }
    }

    public descansar(tempoTreinoHoras: number): void {
        if (tempoTreinoHoras > 2 || tempoTreinoHoras < 1) {
            console.log("\nNúmero inválido de horas.");
        } else if (tempoTreinoHoras == 1) {
            this.vida = this.vida + (this.maxVida * 0.50);
            this.mana = this.mana + (this.maxMana * 0.50);
            this.stamina = this.stamina + (this.maxStamina * 0.50);
            if (this.vida > this.maxVida) {
                this.vida = this.maxVida;
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
}