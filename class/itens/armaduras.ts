import { ItemBase } from "../superclass/itembase";

export class CapaInvisivel extends ItemBase {
    constructor() {
        super('Capa Invisível', 1, 0, 0, 0, 0, 0, 5, 5, 0, 0, 10, 'armadura');
    }
}

export class ArmaduraAbencoada extends ItemBase {
    constructor() {
        super('Armadura Abençoada', 1, 150, 100, 0, 2, 2, 0, 0, 0, 0, 0, 'armadura');
    }
}

export class MantoDoMestreMago extends ItemBase {
    constructor() {
        super('Manto do Mestre Mago', 1, 0, 500, 0, 0, 10, 0, 0, 0, 0, 0, 'armadura');
    }
}

export class RoupasDoDeusMensageiro extends ItemBase {
    constructor() {
        super('Roupas do Deus Mensageiro', 1, 0, 0, 500, 0, 0, 10, 0, 0, 0, 0, 'armadura');
    }
}

export class ArmaduraDeShiva extends ItemBase {
    constructor() {
        super('Armadura de Shiva', 1, 500, 0, 0, 10, 0, 0, 0, 0, 0, 0, 'armadura');
    }
}

export class CouracaDoMartyr extends ItemBase {
    constructor() {
        super('Couraça do Martyr', 1, 50, 0, 0, 2, 0, 0, 7, 0, 0, 0, 'armadura');
    }
}

export class MantoDeChamas extends ItemBase {
    constructor() {
        super('Manto de Chamas', 1, 0, 0, 0, 5, 5, 5, 10, 0, 0, 0, 'armadura');
    }
}


// const capaInvisivel = new Armadura('Capa Invisível', { defesa: 5, destreza: 5 });
// const armaduraAbencoada = new Armadura('Armadura Abençoada', { defesa: 15, intelecto: 2, forca: 2, maxVida: 150, maxMana: 100 });
// const mantoDoMestreMago = new Armadura('Manto do Mestre Mago', { defesa: 5, intelecto: 10, maxMana: 500 });
// const roupasDoDeusMensageiro = new Armadura('Roupas do Deus Mensageiro', { defesa: 5, destreza: 10, maxStamina: 500 });
// const armaduraDeShiva = new Armadura('Armadura de Shiva', { defesa: 5, forca: 10, maxVida: 500 });
// const couracaDoMartyr = new Armadura('Couraça do Martyr', { defesa: 7, maxVida: 50, forca: 2 });
// const mantoDeChamas = new Armadura('Manto de Chamas', { defesa: 10, forca: 5, intelecto: 5, destreza: 5 });
