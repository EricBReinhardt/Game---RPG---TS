import { Util } from "../Util";

export class Inimigo1 {

    nome: string;
    nivel: number;
    vida: number;
    mana: number;
    stamina: number;
    forca: number;
    intelecto: number;
    destreza: number;
    defesa: number;
    exp: number;
    gold: number;
    itens: Set<string>;
    chanceItem: number;
    debuffVeneno: number;

    constructor() {
        this.nome = 'Slime';
        this.nivel = 2;
        this.vida = 50;
        this.mana = 0;
        this.stamina = 100;
        this.forca = 5;
        this.intelecto = 0;
        this.destreza = 0;
        this.defesa = 3;
        this.exp = Util.randomizar(100, 200);
        this.gold = Util.randomizar(100, 200);
        this.itens = new Set([
            'Espada de ferro',
            'Arco recurvo',
            'Martelo do soldado',
            'Cajado do aprendiz',
            'Adaga de caça']);
        this.chanceItem = 20;
        this.debuffVeneno = 0;
    }
}

export class Inimigo2 {

    nome: string;
    nivel: number;
    vida: number;
    mana: number;
    stamina: number;
    forca: number;
    intelecto: number;
    destreza: number;
    defesa: number;
    exp: number;
    gold: number;
    itens: Set<string>;
    chanceItem: number;
    debuffVeneno: number;

    constructor() {
        this.nome = 'Lobo';
        this.nivel = 4;
        this.vida = 75;
        this.mana = 0;
        this.stamina = 125;
        this.forca = 2;
        this.intelecto = 0;
        this.destreza = 8;
        this.defesa = 7;
        this.exp = Util.randomizar(150, 250);
        this.gold = Util.randomizar(150, 250);this.itens = new Set([
            'Espada de ferro',
            'Arco recurvo',
            'Martelo do soldado',
            'Cajado do aprendiz',
            'Adaga de caça']);
        this.chanceItem = 20;
        this.debuffVeneno = 0;
    }
}

export class Inimigo3 {

    nome: string;
    nivel: number;
    vida: number;
    mana: number;
    stamina: number;
    forca: number;
    intelecto: number;
    destreza: number;
    defesa: number;
    exp: number;
    gold: number;
    itens: Set<string>;
    chanceItem: number;
    debuffVeneno: number;

    constructor() {
        this.nome = 'Esqueleto';
        this.nivel = 6;
        this.vida = 100;
        this.mana = 0;
        this.stamina = 150;
        this.forca = 10;
        this.intelecto = 0;
        this.destreza = 4;
        this.defesa = 5;
        this.exp = Util.randomizar(200, 300);
        this.gold = Util.randomizar(200, 300);
        this.itens = new Set([
            'Espada de ferro',
            'Arco recurvo',
            'Martelo do soldado',
            'Cajado do aprendiz',
            'Adaga de caça']);
        this.chanceItem = 20;
        this.debuffVeneno = 0;
    }
}


