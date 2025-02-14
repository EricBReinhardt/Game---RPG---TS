import promptSync from "prompt-sync";
import { ItemBase } from "../superclass/itembase";

export class ArcoElfico extends ItemBase {
    constructor() {
        super('Arco Élfico', 1, 0, 0, 0, 0, 0, 10, 0, 0, 0, 10, 'arma');
    }
}

export class AdagaAmaldicoada extends ItemBase {
    constructor() {
        super('Adaga Amaldiçoada', 1, -100, 0, 0, 10, 0, 20, 0, 0, 0, 10, 'arma');
    }
}

export class EspadaDoAntigoHeroi extends ItemBase {
    constructor() {
        super('Espada do Antigo Herói', 1, 0, 0, 0, 10, 0, 0, 0, 0, 0, 10, 'arma');
    }
}

export class MachadoSedentoDeSangue extends ItemBase {
    constructor() {
        super('Machado Sedento de Sangue', 1, -50, 0, 0, 15, 0, 0, 0, 0, 0, 10, 'arma');
    }
}

export class ChicoteDeGaia extends ItemBase {
    constructor() {
        super('Chicote de Gaia', 1, 0, 0, 50, 0, 0, 15, 0, 0, 0, 10, 'arma');
    }
}

export class EspadasDuplasDoMercenario extends ItemBase {
    constructor() {
        super('Espadas Duplas do Mercenário', 1, 0, 0, 0, 20, 0, 10, 0, 0, 0, 10, 'arma');
    }
}

export class VarinhaDoProfessor extends ItemBase {
    constructor() {
        super('Varinha do Professor', 1, 0, 25, 0, 0, 20, 0, 0, 0, 0, 10, 'arma');
    }
}

export class CajadoDraconico extends ItemBase {
    constructor() {
        super('Cajado Dracônico', 1, 0, 50, 0, 0, 40, 0, 0, 0, 0, 10, 'arma');
    }
}

export class Necronomicon extends ItemBase {
    constructor() {
        super('Necronomicon', 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 10, 'arma');
    }
}

// const arcoÉlfico = new Arma('Arco Élfico', { destreza: 10 });
// const adagaAmaldiçoada = new Arma('Adaga Amaldiçoada', { forca: 10, destreza: 20, maxVida: -100 });
// const espadaDoAntigoHeroi = new Arma('Espada do Antigo Herói', { forca: 10 });
// const machadoSedentoDeSangue = new Arma('Machado Sedento de Sangue', { forca: 15, maxVida: -50 });
// const chicoteDeGaia = new Arma('Chicote de Gaia', { destreza: 15, maxStamina: 50 });
// const espadasDuplasDoMercenario = new Arma('Espadas Duplas do Mercenário', { forca: 20, destreza: 10 });
// const varinhaDoProfessor = new Arma('Varinha do Professor', { intelecto: 20, maxMana: 25 });
// const cajadoDraconico = new Arma('Cajado Dracônico', { intelecto: 40, maxMana: 50 });
// const necronomicon = new Arma('Necronomicon', { intelecto: 5 });
