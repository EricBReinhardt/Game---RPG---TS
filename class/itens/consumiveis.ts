import { ItemBase } from "../superclass/itembase";

export class PocaoDeVida extends ItemBase {
    constructor() {
        super('Poção de Vida', 1, 50, 0, 0, 0, 0, 0, 0, 0, 0, 10, 'consumivel');
    }
}

export class PocaoDeMana extends ItemBase {
    constructor() {
        super('Poção de Mana', 1, 0, 50, 0, 0, 0, 0, 0, 0, 0, 10, 'consumivel');
    }
}

export class PocaoDeStamina extends ItemBase {
    constructor() {
        super('Poção de Stamina', 1, 0, 0, 50, 0, 0, 0, 0, 0, 0, 10, 'consumivel');
    }
}

// const poçãoDeVida = new Consumivel('Poção de Vida', { vida: 50 });
// const poçãoDeMana = new Consumivel('Poção de Mana', { mana: 50 });
// const poçãoDeStamina = new Consumivel('Poção de Stamina', { stamina: 50 });